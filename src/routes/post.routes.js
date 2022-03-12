const bcrypt = require("bcrypt")

const route = require("express").Router()

const getUserData = require("../services/getUserData")
const addUserData = require("../services/addUserData")

route.post("/login", async (req, res, next) => {
    var credentials = {
        username: req.body.username,
        password: req.body.password
    };
    try {
        var resQuery = await getUserData(req.body.username)
        var queryData = resQuery.data
        console.log(queryData, credentials);
        if (queryData.length > 0) {
            console.log("[+] Located data");
            
            var i = 0;
            var located = false;
            var iLocation = 0;
            while (i<queryData.length && !located) {
                if (queryData[i].username === credentials.username) {
                    located = !located
                    iLocation = i;
                }
                i++;
            }
            if(located){
                if (bcrypt.compareSync(credentials.password, queryData[iLocation].password)) {
                    res.cookie("Logged", "true")
                    res.json({
                        query: "ok",
                        user: "ok",
                        password: "ok"
                    })
                }else{
                    res.json({
                        query: "ok",
                        user: "ok"
                    })
                }
                
            }else{
                res.json({
                    query: "ok",
                })
            }
        }else{
            res.json({
                error: `ANY USER LOCATED WITH PROVIDED USERNAME: ${credentials.username}`
            })
        }
    } catch (err) {
        console.error(`Error while getting custom user `, err.message);
        next(err);
    }

})


route.post("/signup", async (req, res, next) => {
    var newCredentials = {
        username: req.body.username,
        password: req.body.password
    }

    try {
        var signupResult = await addUserData(newCredentials.username, newCredentials.password)


        if (signupResult.flag) {
            res.json({
                status: 200,
                code: signupResult.code,
                message: signupResult.msg
            })
        }else{
            res.json({
                status: 500,
                code: signupResult.code,
                dbcode: signupResult.dbcode,
                message: signupResult.msg
            })
        }



    } catch (err) {
        console.error(`Error while creating custom user: ${err.message}`)
        
    }
})

module.exports = route
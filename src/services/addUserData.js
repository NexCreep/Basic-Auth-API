const bcrypt = require('bcrypt')
const bsalt = 10

const db = require("./db");
const helper = require("../helper")

async function addUserData(user, passwd) {
    
    const salts = bcrypt.genSaltSync(bsalt)
    const hash = bcrypt.hashSync(passwd, salts)

    console.log(`[?] Password hash: ${hash}`);

    const result = await db.query(
        `INSERT INTO userpasswd(username, password) VALUES ("${user}", "${hash}")`
    )

    if (!result.errcode) {
        return {
            flag: true,
            code: "INSERT_DONE",
            msg: "DATA ADDED CORRECTLY",
        };
        
    }else{
        return {
            flag: false,
            code: "INSERT_FAILED",
            dbcode: result.errcode,
            msg: "DATA ADDED UNCORRECTLY",
        };

    }
}

module.exports = addUserData;
const routes = require("express").Router()

const foo1 = (req, res, next) => {
    console.log("IN foo1");
    next();
}

const foo2 = (req, res) => {
    console.log("IN foo2");

    res.send("OK")
}


routes.get("/", [foo1, foo2])


module.exports = routes
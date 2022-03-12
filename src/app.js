require("dotenv").config()

const cookieParser = require("cookie-parser")
const express = require("express")
const app = express()
const getroutes = require("./routes/get.routes")
const postroutes = require("./routes/post.routes")

app.set("APP_PORT", process.env.PORT || 5500)

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookieParser())

app.get("/", getroutes)
app.use("/", postroutes)
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});

app.listen(app.get("APP_PORT"), () => {
    console.log(`[+] Listening on port ${app.get("APP_PORT")}`);
})
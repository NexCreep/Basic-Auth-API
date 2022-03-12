require('dotenv').config

const mysql = require("mysql2/promise");

async function query(sql, params){
    const conn = await mysql.createConnection({
        host: process.env.DBHOST,
        user: process.env.DBUSER,
        password: process.env.DBPASS,
        database: process.env.DBNAME
    })
    console.log("[+] Connected to database");

    try {
        const [result, ] = await conn.execute(sql, params)

        return result;
        
    } catch (error) {
        if (error.code === "ER_DUP_ENTRY") {
            console.log("[!] Data duplicated");
        }
        return {
            data: [],
            errcode: error.code
        };
    }

    
}

module.exports = {
    query
};
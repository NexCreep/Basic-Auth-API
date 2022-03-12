const db = require("./db");
const helper = require("../helper")


async function getUserData(user) {
    const rows = await db.query(
        `SELECT * FROM userpasswd WHERE username="${user}"`
    )

    const data = helper.emptyOrRows(rows)

    return {
        data
    }
}

module.exports = getUserData;
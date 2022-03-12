function emptyOrRows(rows) {
    if (!rows) {
        return [];
    }
    return rows;
}

function passwdPolicy(passwd) {
    var passwdSymbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    var passwdLettersU = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwdLettersL = passwdLettersU.toLowerCase();
    var passwdNumbers = "1234567890"


    var pLen = 0
    var pSpace = false
    var pSymb = false
    var pNum = false
    var varpletU = false
    var pletL = false

    pLen = passwd.lenght

    if (pLen >= 8) {
        pSpace = passwd.includes(" ");

    }

}

module.exports = {
    emptyOrRows
}
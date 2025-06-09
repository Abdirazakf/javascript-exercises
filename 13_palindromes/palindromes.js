const palindromes = function (str) {
    let alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789"
    str = str.toLowerCase().split("").filter((character) => alphanumerical.includes(character)).join("")
    let reversed = str.split("").reverse().join("")

    if (reversed == str){
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;

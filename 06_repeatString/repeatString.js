const repeatString = function(string, num) {
    if (num === 0){
        return ""
    } else if (num < 0){
        return "ERROR"
    } else {
        let newString = ""
        
        while (num !== 0){
            newString = newString.concat(string);
            num--;
        }
        
        return newString
    }
};

// Do not edit below this line
module.exports = repeatString;

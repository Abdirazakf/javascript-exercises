const findTheOldest = function (arr){
    let sorted = []
    const date = new Date()
    const currentYear = date.getFullYear()
    
    for (let i = 0; i < arr.length; i++){
        if (Object.hasOwn(arr[i], "yearOfDeath")){
            let age = arr[i].yearOfDeath - arr[i].yearOfBirth
            sorted[i] = {name: arr[i].name, age: age}
        } else {
            let age = currentYear - arr[i].yearOfBirth
            sorted[i] = {name: arr[i].name, age: age}
        }
    }
    sorted.sort((a,b) => a.age - b.age)
    
    let oldest = {name: sorted[sorted.length - 1].name}
    
    return oldest
};

// Do not edit below this line
module.exports = findTheOldest;

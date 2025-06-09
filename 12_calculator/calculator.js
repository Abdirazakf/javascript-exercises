const add = function(a,b) {
  return a+b
};

const subtract = function(a,b) {
  return a-b
};

const sum = function(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  
  return sum
};

const multiply = function(arr) {
  let product = 1

  for (let i = 0; i < arr.length; i++){
    product *= arr[i]
  }

  return product
};

const power = function(a,b) {
  return Math.pow(a,b)
};

const factorial = function(num) {
  if (num === 0){
    return 1
  } else if (num < 3) {
    return num
  } else {
    let factor = num - 1
    
    for (let i = 0; i < num; i++){
      if (factor > 0){
        num *= factor
        factor--
      }
    }
    
    return num
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

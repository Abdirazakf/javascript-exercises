const getTheTitles = function(arr) {
    let titles = []
    for (let i = 0; i < arr.length; i++){
        titles[i] = arr[i].title
    }

    return titles
};

// Do not edit below this line
module.exports = getTheTitles;

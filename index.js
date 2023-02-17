// Problem 1: Let’s play a mind game 
function mindGame(num) {
    if (num <= 0) {
        return 'Error: Input must be a positive number.'
    }
    return (num * 3 + 10) / 2 - 5;
}

// Problem 2: Finding even or odd
function evenOdd(str) {
    if (typeof str !== 'string') {
        return 'Error: Input must be a string.'
    }
    let length = str.length;
    if (length % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}


// Problem 3: Is Less or Greater than seven

function isLGSeven(num) {
    if (typeof num !== "number") {
        return 'Error: Input must be a number'
    }

    let difference = num - 7;

    if (difference < 7) {
        return difference;
    }
    return num * 2;
}


// Problem 4: Finding Bad data
function findingBadData(array) {
    if (typeof array !== "object") {
        return "Error: Input must be an object"
    }
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        let index = array[i]
        if (index < 0) {
            count++;
        }
    }
    return count;
}


// Problem 5: Convert your gems into diamond
function gemsToDiamond(a, b, c) {
    const num = a + b + c;
    if (typeof num !== "number") {
        return "Error: Input a valid number"
    }
    let total = (a * 21) + (b * 32) + (c * 43);
    if (total > 2000) {
        return total - 2000;
    }
    return total;
}

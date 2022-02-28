// let converted_deg = 12;

// function convert() {
//     let converted_deg = 12;
//     converted_deg = converted_deg + 1;
//     console.log('converted_deg', converted_deg); // returns 13
// }

// convert();

// console.log('converted_deg', converted_deg); // still returns 13

//better to not access global variables within functions

function convertToCelsuis(deg_fah, fixed_points = 2, callback) {
    let converted_deg = (deg_fah - 32) * 5 / 9;
    callback(converted_deg.toFixed(fixed_points));
}

function printConsole(val) {
    console.log('converted value is' + val);
}

function printModal(val) {
    alert('converted value is', val);
}

convertToCelsuis(100, 2, printConsole);


var test = 'this is a string';

var myArray = ['blue', 'green', 'pink'];

console.log(test.charAt(5));

//map method #1
var newArray = myArray.map( callbackFunction );

function callbackFunction(pos) {
    return pos.toUpperCase();
}

//map method # 2
const new_ar = myArray.map( pos => pos.toUpperCase());

console.log(newArray);
console.log(new_ar);

// function convertToCelsuis (deg_fah, fixed_points=2) {
//     let converted_deg = ( deg_fah-32) * 5/9;
//     console.log(converted_deg.toFixed( fixed_points ))
// }

// function convert(converter, temperature) {
//     console.log(converter(temperature));
// }

// convert(convertToCelsuis, 70);


// var always gets hoisted to the top of your code, let and const do not
// => arrow used to condense a function and return something else

const num = [3, 4, 6, 7, 8];

var array_sum = num.reduce( function(prev, current) {
    return prev + current;
})

console.log(array_sum)
// 1. Conditions:
// Define a number variable (can be random) and then create a condition to check if that variable  is odd or even.  (This is the same exercise we worked during class. - I have added it here so everyone can complete and submit).

var n = Math.floor(12 * Math.random());


if (n % 2) {
    console.log("this is odd, the number is " + n);
}
else {
    console.log("this is even. the number is " + n);
}

// 2. Conditions/Random:
// Use the below rolling dice generator to create a random number between 1 and 6. Then write a condition to check that number and do something for each check eg. return the value back to console using console.log(...). Consider using the switch operator for it.

let rolled = Math.ceil(Math.random() * 6);
console.log(rolled);

switch (rolled) {
    case (1):
    case (3):
    case (5):
        console.log('Hey, you rolled odd with a ' + rolled + '.');
        break;
    case (2):
    case (4):
    case (6):
        console.log('Hey, you rolled even with a ' + rolled + '.');
        break;

}




// 3. Loops:
// Use the same random dice generator as above to generate a number between 1 and 6. Now create a loop that keep rolling until the number generated is more than 3. As soon as you get a number more than three, the loop should end. Output how many times the loop ran before it reached this number. Be careful with this - if you create a loop that has no way to end (due to a faulty check), it will easily crash your browser!


let count = 0;
while (rolled < 3) {
    count++;
    rolled++;
}

console.log('You rolled a ' + rolled + ' and it took ' + count + ' rolls.');


// 4.  Loops:
// Find the factorial of a random number using loops. Start with a number (random or fixed) and find its factorial. A factorial is a number you get by multiplying all the numbers preceding it, starting with 1 eg. factorial of 5 is 1  * 2 * 3 * 4 * 5 = 1204.

let number = Math.floor(10 * Math.random());
// console.log(number)
// let rando = Math.random() * 10
// console.log(rando)

let fact = 1;

for (let i = 1; i <= number; i++) {
    fact = fact * i;
}

console.log('The number is ' + number + ' , so the factorial is ' + fact);

// 5. Loops
// Using loops , create a triangular pattern (using console.log statements only for now) like this:
// #
// ##
// ###
// ####


// let sign = '#';
let triangle = '';

for (let i = 1; i <= 4; i++) {
    for (let j = 0; j < i; j++) {
        triangle += '#';
    }
    triangle += "\n";
}

console.log(triangle);


// 6. Loops and Conditions:

// Using more loops and conditions, create a chess board using # and space ' ' using console.log statements.  You could consider using a loop inside a loop to create the alternative pattern. A chess board  has  8 x 8 = 64 squares.

var size = 16;

var board = "";

for (var y = 0; y < 8; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);
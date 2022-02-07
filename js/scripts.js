// console.log('hello world');

let greetingContainer;

//assigning greeting to variable
greetingContainer = "Hello";
console.log(greetingContainer + " to you!");

// alert('Greetings ' + greetingContainer);

document.write('<p>' + 
greetingContainer + ' again' + '</p>');

//event listener to change body background

const btn = document.getElementById('button');

const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'rebeccapurple', 'violet'];

function change() {
    document.body.style.background = rainbow[Math.floor(7 * Math.random())];
}

btn.addEventListener('click', change);

/* Simple DOM Manipulation example */
const now = new Date();
const hours = now.getHours();
document.write(`It's now: ${hours}. <br><br>`);
let bgColor = "lightorange";
if (hours > 17 && hours < 20){
  bgColor = "orange";
}
else if (hours > 19 && hours < 22){
  bgColor = "orangered";
}
else if (hours > 21 || hours < 5){
  bgColor = "#C0C0C0";
}
else if (hours > 8 && hours < 18){
  bgColor = "lightblue";
}
else if (hours > 6 && hours < 9){
  bgColor = "skyblue";
}
else if (hours > 4 && hours < 7){
  bgColor = "steelblue";
}
else {
  bgColor = "white";
}
document.body.style.backgroundColor = bgColor;

const ul = document.createElement('ul');
const url = 'https://randomuser.me/api/?results=10';

fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log('ended...')
        console.log(data);
        let authors = data.results; // Get the results
        authors.forEach(function(author) { // Map through the 
// results and for each run the code below
          let li = document.createElement('li'), //  Create the 
// elements we need
              img = document.createElement('img'),
              span = document.createElement('span');
          img.src = author.picture.medium;  // Add the source of 
// the image to be the src of the img element
          span.innerHTML = `${author.name.first} 
${author.name.last}`; // Make the HTML of our span to be the 
// first and last name of our author
          li.appendChild(img); // Append all our elements
          li.appendChild(span);
          ul.appendChild(li);
        });
        document.body.append(ul);
    })
    .catch(function(error) {
        console.log(error);
    });
    
console.log('started...')



var n = Math.floor(12 * Math.random());


if (n % 2) {
  console.log("this is odd, the number is " +n)
} else {
  console.log("this number is even. the number is " +n)
}

// let heads = 1;
// let tails = 2;

// let num = Math.round(Math.random()) + 1;

// var choice = prompt("Heads or Tails");

// if (num == 1) {
//     var flipResult = "heads";
// } else {
//     var flipResult = "tails";
// }

// if (flipResult == choice) {
//     if (flipResult == "heads") {
//         alert("The flip was heads and you chose heads...you win!");
//     } else {
//         alert("The flip was tails and you chose tails...you win!");
//     }
// } else {
//     if (flipResult == "heads") {
//         alert("The flip was heads and you chose tails...you lose!");
//     } else {
//         alert("The flip was tails and you chose heads...you lose!");
//     }
// }

// 5! = 5 x 4 x 3 x 2 x 1

// let number =10

let number = Math.floor(10 * Math.random());

let fact = 1;

for(let i=1; i<=number; i++) {
  fact = fact * i;
}

console.log(fact);
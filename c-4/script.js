//syntax built-in functions objects
//constructor methods 
let s = "hello"; //string data type

let str = new String("hi");

// console.log(s.length);


// Math is a library of functions
Math.PI
Math.pow(1, 2) // also written 3**2
Math.random()

const array = [1, 4, 5, 'test']

// const array = new Array('test', 5, 6, 7);


const the_date = new Date();

// console.log(the_date)

let obj = {};

// let obj = new Object()

let o = {
    name: 'Molly',
    age: '30'
}

o.name = "James";
o.age = 23;
o.city = "NYC";

console.log(o)

let obj_2 = [{
        person1: {
            name: 'Molly',
            age: '30'

        },
        person2: {
            name: 'James',
            age: '20'
        }
    }

]

// o.age or o["age"] to call the data

// const person = {};

// person.firstName = "John";
// person.lastName = "Parsons";

// person.sayHello = function() {
//     console.log("My name is " +
//         person.firstName + " " + this.lastName)
// }
// person.sayHello();


// const person = {
//     firstName: "John",
//     lastName: "Parsons",
//     citiesLived: ["New York",
//         "Boston", "Vienna"
//     ],

//     sayHello() {
//         console.log("My name is" +
//             person.firstName +
//             +this.lastName);
//     }
// };


const family = {
    dad: { realName: "John Denver" },
    mom: { realName: "Katie McGraw" },
    son: { realName: "Lawrence Holl" }
};
// console.log(family.dad.realName);
family.dad["realName"];

const hero = {
    name: 'Thor',
    weapon: "Axe"
};

const newHero = hero;

//strings are not the same as objects, you cannot copy the object as you did above. You can copy a string that way, however.

let my_string = "test";
let my_string_2 = my_string;


//json 

const json_person = {
    "firstName": "John",
    "lastName": "Parsons"
};


// console.log(JSON.stringify(json_person));
// JSON.stringify(person);

//car is a constructor function that you can create new objects with

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.greet = function() {
        console.log("I am a " + this.make + " " +
            this.model);
    };
}
const car1 = new Car('Nissan', '300ZX', 1992);
const car2 = new Car('Mazda', 'Miata', 1990);
// console.log(car1.greet());
// console.log(car2.greet());

// if you want to use a template again and again you should use this
class Person {
    constructor(firstName = "", lastName = "") 
    {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return this.firstName + " " + this.lastName
    }
};

//create a new Person
const person1 = new Person('Bentley', 'VW');
const person2 = new Person('Lucy', 'Lu');
// console.log(person1.getFullName());
// console.log(person2.getFullName());


// create a dice object
// create a side property that can be changed on definition
// create a method that rolls the dice and returns a number between 1 and the side
// create 2 instances of dice, one with 6 sides and one with 12 sides and run the methods of each

// class dice {
//     constructor(side = "")
//     {this.
// }


function rollDice(sides) {
    this.side = sides
    this.roll = function () {
        return ( Math.floor( Math.random() * this.sides + 1) )
}
}


console.log(rollDice(6))



// console.log(Math.ceil(Math.random() * 6))

// return ( Math.floor( Math.random() * this.sides + 1) )
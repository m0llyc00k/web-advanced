// in array form:
const qs = [
    ["how are you", "getting better"],
    ["what is your name", "HAL"],
    ["why are you here", "sorry...that question needs pondering"]
    ["what is the meaning on life", "I am pretty sure it's 42"]
];

function checkAnswer(q) {
    // logic to loop through and find a match
    for (let o of qs) {
        if (o[0] == q) { // if the first index (the question) matches the argument, then return the 2nd index (answer)
            return o[1];
        }
    }
}

//var question = prompt('Ask your question'); // this prompt you to ask a question from within the console
let question = "what is your name";
let ans = checkAnswer(question);
// console.log(ans);

// let result = ai.checkAnswer(question);


// ans var will contain the string with the question
// let ans = prompt('Ask away');



const myPet = {
    "What is the name of your pet?" : 'Thor',
    "What type of pet?" : 'dog',
    "How old is your pet?" : '12',
    "What color is your pet?" : 'brown and white',
    "Whats your pet's favorite toy?" : 'bone'
};


function findPetName() {
    myPet.find("What is the name of your pet?") 
    
    
}

const answer = myPet.includes("What is the name of your pet?") 

console.log(answer);


// function getPetInfo(thisPet) {
//     return `My pet is a ${thisPet.animal} their name is ${thisPet.name}`;
// }

// console.log(getPetInfo(myPet));



// function pet(name, animalType, age, color) {
//     this.name = name;
//     this.animalType = animalType;
//     this.age = age;
//     this.color = color;
//     this.question1 = function() {
//         console.log("I have a " + this.animalType + " and their name is " + this.name);
//     }
//     this.question2 = function() {
//         console.log("They are " + this.age + " and " + this.color)
//     }
// }



// const pet1 = new pet('Thor', 'dog', 12, 'brown');
// const pet2 = new pet('Sandy', 'cat', 3, 'orange and white');



// console.log(pet1.question1());
// console.log(pet2.question2());

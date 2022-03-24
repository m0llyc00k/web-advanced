//create a function that reverses the contents of a sentance or a word or a phrase (ex: "hello there" becomes "ereht olleh")

let phrase = "hello there"

function reverse() {
    var str = phrase.split("");
    var split = str.reverse();
    var join = split.join("")
    // return join
    console.log(join)
}

reverse()

//create a function that checks a string or sentance and returns true if that parameter is a palindrome.

// let phrase2 = "kayak"
// let phrase3 = "super"

function checkPal(word) {
    var str2 = word.split("");
    var split2 = str2.reverse();
    var join = split2.join("");
    if (join == word) {
        console.log('This is a palindrome.')
    } else {
        console.log('This is not a palindrome.')
    }
    
}

checkPal("kayak")


//create a function that will take a year and let you know if its a leap year , if the year is not divisible by 100 but is divisible by 4 but is 

function leapYear (num) {
    if ((num % 100 !==0 && num % 4 == 0) || (num % 400 == 0)) {
        console.log('leap year!')
    } else {
        console.log('try again')
    }
}

leapYear(2000);

//create a function that can perform a word count given a block of text. Punctuations or special characters are not to be included. 

function countWords (text) {
    let re = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    let removePun = text.replace(re,"");
    let count = removePun.split(" ").length;
    return console.log(count);
}

countWords("Hello, my name is Molly. Nice to meet you!");


//Use a form and DOM and form event listener to update the AI/chatbot object created in class 4 assignment. 
//Use some validation to make sure a question is actually asked and has some content inside it before processing 
//(show errors in html like i demonstrated) and then display the answer back in the web page by creating a new 
//DOM element. Have fun with the UI!

    const questions = {
      "What is 2 + 2?": "4",
      "What color is the sky?": "blue",
      "What animal barks?": "dogs",
      "What is the meaning of life?": "peanut butter"

    }


    let btn = document.createElement("button");
    btn.innerHTML = "Answer Question";
    btn.onclick = function myFunction() {
      for (const property in questions) {
        let answer = prompt(`${property}`);

        let thisAnswer = document.createElement("p")

        if (answer == questions[property]) {
          thisAnswer.innerHTML = "Yes, " + answer + " is the right answer";
        }
        else {

          thisAnswer.innerHTML = "Nope, \'" + answer + "\' is the wrong answer";
        }
        document.body.appendChild(thisAnswer)
      }
    }

    document.body.appendChild(btn);
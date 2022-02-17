//Use an exercise from the previous assignment or one of your decision tree black boxes (or create a new one if you like). 
//For example generating a triangle/chessboard pattern. Now rewrite that code and refactor it using functions, adjusting 
//it to be as flexible as you can through the use of parameters and callback functions, where it makes sense.

//Build your pattern generator with multiple functions, callbacks and parameters that makes your pattern (or conditions) 
//creating method as flexible as possible. Then play around by tweaking the arguments so that by changing a few parameters, 
//your function creates something unexpected and unique. Then put them together into a sequence of function calls.

let hunger_state = prompt("Am I Hungry? (yes/no) ?");

if (hunger_state == "yes") {
  makeDinner();
  // user is hungry so check for time
  let time_avail = prompt("How many hours do you have?");

  if (time_avail >= 1) {
    makeDinner();
    // user has more than or equal to 1 hour so make dinner                                                                                                 
    startSleep('satisfied');
    console.log("You should make a real meal.");


    // this will call a custom function called makeDinner and pass the amount to it

  }
  else { // if user has less than 1 hour, have a snack
    haveSnack();
    startSleep('unsatisfied');
  }

};

if (hunger_state == "no") {
  skipDinner();
  startSleep('satisfied')
  console.log("skip dinner");
};

function makeDinner() {
  document.getElementById("changeImage").src = "./imgs/Spaghetti5.svg";
  document.getElementById("mainText").innerHTML = "Make a real dinner!";
}

function haveSnack() {
  document.getElementById("changeImage").src = "./imgs/cornsnack.svg";
  document.getElementById("mainText").innerHTML = "Just have a snack";
}

function startSleep(d) {
   document.getElementById("secondText").innerHTML = "You are going to bed " + d;
}

function skipDinner() {
  document.getElementById("mainText").innerHTML = "Skip dinner..."
}

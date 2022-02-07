let hunger_state = prompt("Am I Hungry? (yes/no) ?");

if ( hunger_state == "yes" ) {
  // user is hungry so check for time
  let time_avail = prompt("How many hours do you have??");

  if ( time_avail >= 1 ) {
    // user has more than or equal to 1 hour so make dinner
    console.log("You should make a real meal.");
    makeDinner(time_avail); // this will call a custom function called makeDinner and pass the amount to it

  } else { // if user has less than 1 hour, have a snack
   haveSnack();
   startSleep('satisfied');
 }

} else {
  // user is not hungry so watch a movie and then go to sleep
  startSleep('unsatisfied');
}


if ( hunger_state == "no" ) {
  console.log("skip dinner")
}
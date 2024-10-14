// set up question and matching answer arrays
var basicQuest = ['What is the opposite of left?', 'What is the opposite of down?', 'What is the opposite of off?'];
var basicAns = ['right', 'up', 'on'];

// math quiz function displays math questions and gives the user 2 attempts to get it right - then returns a score
function basicQuiz() {
  // initialize points
  var points = 0;
  //use a for loop to loop through each math question
  for (i = 0; i <= 3; i++) {
    //set attempts to 3
    var attempts = 3;
    // use a while loop to give the user 3 attempts to answer
    while (attempts > 0) {
      // prompt user with math question
      ans = prompt(basicQuest[i]);
      // see if the answer matches the answer array
      if (ans == basicAns[i]) {
        // if correct, add 3 to points, alert user and set attempts to 0
        points = points + 3;
        alert("Correct, Good Job!");
        attempts = 0;
      } else {
        // if answer doesn't match, alert user and subtract 1 from each attempt
        alert("Incorrect, Try Again!");
        attempts = attempts - 1;
        points = points -1;
      } // end if
    } // end while
  } // end for
  // return the points variable
  return points;
} // end basicQuiz function
var val = prompt('Hello');
if(val){
    alert('Not null');
}
else {
    alert('Null');
}
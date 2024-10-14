// set up question and matching answer arrays
var mathQuest = ['3 + 2', '7 - 4', '10 / 5', '6 X 2'];
var mathAns = ['5', '3', '2', '12'];

// initialize points
var points = 0;
//use a for loop to loop through each math question
for (i = 0; i <= 3; i++) {
	var score = mathQuiz(i);
} // end for

// math quiz function displays math questions and gives the user 2 attempts to get it right - then returns a score
function mathQuiz(i) {
    //set attempts to 3
    var attempts = 3;
    // use a while loop to give the user 3 attempts to answer
    while (attempts > 0) {
      // prompt user with math question
      ans = prompt("What is " + mathQuest[i]);
      // see if the answer matches the answer array
      if (ans == mathAns[i]) {
        // if correct, add 1 to points, alert user and set attempts to 0
        points = points + 1;
        alert("Correct!");
        attempts = 0;
      } else {
        // if answer doesn't match, alert user and subtract 1 from attempts
        alert("Incorrect");
        attempts = attempts - 1;
      } // end if
    } // end while
  // return the points variable
  return points;
} // end mathQuiz function
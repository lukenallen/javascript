var basicQuest = ['What is the opposite of Left?', 'What is the opposite of Down?', 'What is the opposite of Off?'];
var basicAns = ['Right', 'Up', 'On'];

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
          // if correct, add 1 to points, alert user and set attempts to 0
          points = points + 1;
          alert("Correct, Good Job!");
          attempts = 0;
        } else {
          // if answer doesn't match, alert user and subtract 1 from attempts
          alert("Incorrect, Try Again!");
          attempts = attempts - 1;
        } // end if
      } // end while
    } // end for
    // return the points variable
    return points;
  } // end mathQuiz function
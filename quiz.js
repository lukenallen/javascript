var basicQuest = ['What is the opposite of Left?', 'What is the opposite of Down?', 'What is the opposite of Off?'];
var basicAns = ['Right', 'Up', 'On'];

function basicQuiz() {
  var points = 0;
  var attempts = 3;
    while (attempts > 0) {

      ans = prompt(basicQuest[0]);
      if (ans == basicAns[0]) {
        points = points + 1;
        alert("Correct, Good Job!");
        attempts = 0;
      } else {
        alert("Incorrect, Try Again!");
        attempts = attempts - 1;
        ans = prompt(basicQuest[1]);
      if (ans == basicAns[1]) {
        points = points + 1;
        alert("Correct, Good Job!");
        attempts = 0;
      } else {
        alert("Incorrect, Try Again!");
        attempts = attempts - 1;
        ans = prompt(basicQuest[2]);
      if (ans == basicAns[2]) {
        points = points + 1;
        alert("Correct, Good Job!");
        attempts = 0;
      } else {
        alert("Incorrect, Try Again!");
        attempts = attempts - 1;
        }
      }
    }
  }
  return points;
}
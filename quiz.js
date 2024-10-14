var basicQuiz = ['What is the opposite of Left?', 'What is the opposite of Down?', 'What is the opposite of Off?'];
var basicAns = ['Right', 'Up', 'On'];
function basicQuiz() {
  var points = 0;
  for (i = 0; i <= 3; i++) {
    var attempts = 3;
    while (attempts > 0) {
      ans = prompt("What is " + basicQuiz[i]);
      if (ans == basicAns[i]) {
        points = points + 1;
        alert("Correct!");
        attempts = 0;
      } else {
        alert("Incorrect");
        attempts = attempts - 1;
      }
    }
  }
  return points;
}
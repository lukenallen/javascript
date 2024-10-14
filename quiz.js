var points = 0;
var questions = [
['What is the opposite of Left?', Right],
['What is the opposite of Down?', Up],
['What is the opposite of Off?', On]
];
for (var i=0; i<Questions.length; i++) {
    askQuestion(questions[i]);
for (var i=0; i<questions.length; i++) {
    askQuestion(questions[i]);
}
function askQuestion(question) {
    var answer = prompt(question[0],'');
    if (answer == question[1]) {
        alert('Correct, Good Job!');
        points++;
    } else {
        alert('Incorrect, Try Again!');
    }
    }
}
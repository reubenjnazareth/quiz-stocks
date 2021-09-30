var readlineSync = require("readline-sync");

var userName = readlineSync.question("What is your name? ");
console.log("Hi " + userName + ", welcome to this Quiz! Lets test your knowledge about the stock market ");

var score = 0;

function play(question, answer) {
var userAnswer = readlineSync.question(question);
console.log("You entered: ", userAnswer);
console.log("Correct answer is: ", answer)
if (userAnswer === answer) {
  console.log("Right Answer!");
  score ++;
} else{
  console.log("INCORRECT!!");
}
console.log("CURRENT SCORE: ", score);

}

var questions = [
  {question: "Who controls the capital market in India?\na) SEBI \nb) BSE \nc) NSE\n", answer: "a"},
  {question: "How many companies are included in the SENSEX of India? \na) 30 \nb) 20 \nc) 100\n ", answer: "a"},
  {question: "What is the full form of IPO? ", answer: "initial public offering"},
  {question: "How many companies are included in NIFTY 50? ", answer: "50"},
  {question: "Which country does NASDAQ Stock Exchange belong to? ", answer: "usa"},
  {question: "Asia’s Oldest Stock Exchange? ", answer: "bse"},
  {question: "What is done in the stock market? \na. trading \nb. singing \nc. dancing ", answer: "c"}
]

for (var i =0; i < questions.length; i++) {
  currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
  console.log("_________");
}

var highScores = [
  {name: "Reuben", score: 7}, 
  {name: "John", score: 6}];

console.log("Your FINAL SCORE: ", score);

console.log("HIGH SCORES ARE ");
for (var i = 0; i < highScores.length; i++) {
console.log(highScores[i].name + ": " +  highScores[i].score);
}
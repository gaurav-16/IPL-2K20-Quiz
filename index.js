const readlineSync = require("readline-sync");

let score = 0;

const topScores = [
  {
    name: "Player1",
    score: 4,
  },
  {
    name: "Player2",
    score: 3,
  },
]

 
const userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " Let's test your IPL knowledge with this short quiz.");


function play(question, answer) {
  const userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 

    console.log("Right!");
    score = score + 1;
    
  } else {
    console.log("Wrong!");
    score = score - 1;
  }

  console.log("current score: ", score);
  console.log("-------------")
}

const questions = [{
  question: "Who is the highest run scorer in IPL 2020? ",
  answer: "KL Rahul"
}, 
{
  question: "Who has smashed maximum number of sixes in IPL 2020? ",
  answer: "Ishan Kishan"
},
{
  question:"Who has hit the biggest six of IPL 2020 season? ",
  answer: "Nicholas Pooran"
},
{
  question: "Who is the highest wicket taker in IPL 2020? ",
  answer: "Kagiso rabada"
}];

   for (let i=0; i<questions.length; i++) {
    let currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }

function displayScores() {
  console.log("YAY! You Scored: ", score);

  console.log("Check out the top scores, if you should be there ping me and I'll update it");

  topScores.map(score => console.log(score.name, " : ", score.score))
}
displayScores();
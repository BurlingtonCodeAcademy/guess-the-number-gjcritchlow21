const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();

async function start() {
  console.log("Let's play a game! Think of a number between 1 & 100");
let posAnswer = ["y", "Y", "yes", "Yes", "correct", "Correct", "yea", "Yea", ];
let negAnswer = ["n", "N", "no", "No", "nope", "Nope", "incorrect", "Incorrect"];
let highRangeAdjust = ["h", "H", "higher", "Higher", "high", "High"];
let lowRangeAdjust = ["l", "L", "lower", "Lower", "low", "Low"];
let computerGuess = getRandomInt(1,100);
let answer = await ask('Is your number ' + computerGuess + '? ');
  if (posAnswer.includes(answer)) {
    console.log("Ha! First Try!")
  }

let secQues = (' ');
 while (negAnswer.includes(answer)) {
  secQues = await ask('Is it  higher or lower? ');
    if(highRangeAdjust.includes(answer)){
      console.log
      
      
    }
    answer = await ask('Is your number ' + computerGuess + '? ');
    if(negAnswer.includes(answer)) {
      
    }  else {
      console.log("WINNER WINNER CHICKEN DINNER")
    }
  }

console.log('Victory!')
  process.exit();
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive,
  };

  function newGuessNumb(){
    newHigh = 100,
    newLow = 0,
    newGuess(),
  };
//Constants//
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

//Functions//
function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive,
}

//Game Start//
start();
async function start() {
  //Arrays to check answers against, create cheat clause, and ask the prompt
  console.log("Let's play a game! Think of a number between 1 & 100");
  let posAnswer = ["y", "Y", "yes", "Yes", "correct", "Correct", "yea", "Yea",];
  let negAnswer = ["n", "N", "no", "No", "nope", "Nope", "incorrect", "Incorrect"];
  let highRangeAdjust = ["h", "H", "higher", "Higher", "high", "High"];
  let lowRangeAdjust = ["l", "L", "lower", "Lower", "low", "Low"];
  let highValue = 100;
  let lowValue = 1;
  let computerGuess = getRandomInt(lowValue, highValue);
  let answerArray = [];
  let answer = await ask('Is your number ' + computerGuess + '? ');
  if (posAnswer.includes(answer)) {
    console.log("Ha! First Try!");
  }

  //Begins guessing
  while (negAnswer.includes(answer)) {
    let answer = await ask('Is it  higher or lower? ');
    answerArray.push(computerGuess);
    if (highRangeAdjust.includes(answer)) {
      console.log('higher, eh?');
      lowValue = computerGuess;
    } else if (lowRangeAdjust.includes(answer)) {
      console.log('lower, eh?');
      highValue = computerGuess;
    } else if (answerArray.includes(computerGuess)) {
      console.log('You cheated! This is what we do cheaters...');
      process.exit();
    } else {
      console.log('Does not compute');
      continue;
    }

  //Continues guessing
    computerGuess = getRandomInt(lowValue, highValue);
    let yesOrNo = false;

  //Continues loop until positive answer is entered
    while (true) {
      answer = await ask("Is it " + computerGuess + "?");
      if (posAnswer.includes(answer)) {
        yesOrNo = true;
        break;
      } else if (negAnswer.includes(answer)) {
        yesOrNo = false;
        break;
      } else if (answerArray.includes(computerGuess)) {
        console.log('You cheated! This is what we do cheaters...');
        process.exit();
      } else {
        console.log('Does not compute');
      }
    }

  //Game Ends
    if (yesOrNo) {
      console.log('Winner, Winner, Chicken Dinner!');
      process.exit();
    }
  }
}

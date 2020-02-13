const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();

async function start() {
  console.log("Let's play a game! Guess a number between 1 & 100")
  let secretNumber = await ask("What is it?\nI will activley try to peak FYI...\n");
  console.log('You entered: ' + secretNumber + ". Is this correct?");
  let answer = await ask("Is it higher or lower?");
  
    // Now try and complete the program.
  process.exit();
}

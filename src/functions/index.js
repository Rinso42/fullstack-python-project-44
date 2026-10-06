import getAnswer from './getAnswer.js';
const playGame = (userName, description, game) => {
  const roundCount = 3
  console.log(description)
  for (let currentRound = 0; currentRound < roundCount; currentRound += 1) {
    const [question, correctAnswer] = game();
    console.log(`Question: ${question}`);
    const userAnswer = getAnswer();
    if (userAnswer !== String(correctAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default playGame;
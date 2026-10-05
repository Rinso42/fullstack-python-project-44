import getAnswer from '../getAnswer.js';
import getProgression from '../getProgression.js';
const playProgression = (userName) => {
  console.log('What number is missing in the progression?');
  for (let round = 0; round < 3; round += 1) {
    const start = Math.floor(Math.random() * 20) + 1;
    const step = Math.floor(Math.random() * 10) + 1;
    const length = Math.floor(Math.random() * 6) + 5;
    const progression = getProgression(start, step, length);
    const hiddenIndex = Math.floor(Math.random() * length);
    const correctAnswer = progression[hiddenIndex];
    const altProgression = [];
    for (let index = 0; index < progression.length; index += 1) {
      if (index === hiddenIndex) {
        altProgression.push('..');
      } else {
        altProgression.push(progression[index]);
      }
    }
    console.log(`Question: ${altProgression.join(' ')}`);
    const userAnswer = getAnswer();
    if (Number(userAnswer) !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default playProgression;
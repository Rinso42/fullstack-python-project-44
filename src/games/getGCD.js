import getAnswer from '../getAnswer.js';
import euclid from '../euclid.js'
const getGCD = (userName) => {
  console.log('Find the greatest common divisor of given numbers.');
  for (let round = 0; round < 3; round += 1) {
    const number1 = Math.ceil(Math.random() * 100) + 1;
    const number2 = Math.ceil(Math.random() * 100) + 1;
    const correctAnswer = euclid(number1, number2);
    console.log(`Question: ${number1} ${number2}`);
    const userAnswer = getAnswer();
    if (Number(userAnswer) !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations ${userName}!`);
};
export default getGCD;
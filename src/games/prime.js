import getAnswer from '../getAnswer.js';
import isPrime from './isPrime.js';
const playPrime = (userName) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let round = 0; round < 3; round += 1) {
    const number = Math.ceil(Math.random() * 100);
    let correctAnswer;
    if (isPrime(number)) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    console.log(`Question: ${number}`);
    const userAnswer = getAnswer();
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default playPrime;
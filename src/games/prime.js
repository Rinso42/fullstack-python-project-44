import isPrime from '../functions/isPrime.js';
export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".' 
const playPrime = () => {
  const maxNumber = 100;
  const number = Math.ceil(Math.random() * maxNumber);
  let correctAnswer;
  if (isPrime(number)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [number, correctAnswer];
};
export default playPrime;
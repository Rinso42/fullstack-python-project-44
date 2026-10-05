import isPrime from '../functions/isPrime.js';
const playPrime = () => {
  const number = Math.ceil(Math.random() * 100);
  let correctAnswer;
  if (isPrime(number)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [number, correctAnswer];
};
export default playPrime;
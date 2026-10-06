import euclid from '../functions/euclid.js';
export const description = 'Find the greatest common divisor of given numbers.'
const getGCD = () => {
  const maxNumber = 100;
  const minNumber = 1
  const number1 = Math.ceil(Math.random() * maxNumber) + minNumber;
  const number2 = Math.ceil(Math.random() * maxNumber) + minNumber;
  const correctAnswer = euclid(number1, number2);
  const question = `${number1} ${number2}`;
  return [question, correctAnswer];
};
export default getGCD;

import euclid from '../functions/euclid.js';
const getGCD = () => {
  const number1 = Math.ceil(Math.random() * 100) + 1;
  const number2 = Math.ceil(Math.random() * 100) + 1;
  const correctAnswer = euclid(number1, number2);
  const question = `${number1} ${number2}`;
  return [question, correctAnswer];
};
export default getGCD;

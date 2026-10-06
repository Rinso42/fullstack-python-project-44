export const description = 'Answer "yes" if the number is even, otherwise answer "no".'
const evenCheck = (number) => number % 2 === 0;
const playIsEven = () => {
  const maxNumber = 100;
  const number = Math.ceil(Math.random() * maxNumber);
  const correctAnswer = evenCheck(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};
export default playIsEven;
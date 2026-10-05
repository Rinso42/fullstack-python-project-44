const evenCheck = (number) => number % 2 === 0;
const playIsEven = () => {
  const number = Math.ceil(Math.random() * 100);
  const correctAnswer = evenCheck(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};
export default playIsEven;
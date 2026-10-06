export const description = 'What is the result of the expression?';
const playCalc = () => {
  const maxNumber = 100;
  const number1 = Math.ceil(Math.random() * maxNumber);
  const number2 = Math.ceil(Math.random() * maxNumber);
  const actions = ['+', '-', '*'];
  const action = actions[Math.floor(Math.random() * actions.length)];
  let correctAnswer;
  switch (action) {
    case '+':
      correctAnswer = number1 + number2;
      break;
    case '-':
      correctAnswer = number1 - number2;
      break;
    case '*':
      correctAnswer = number1 * number2;
      break;
  }
  const question = `${number1} ${action} ${number2}`;
  return [question, correctAnswer];
};
export default playCalc;
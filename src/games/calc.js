const playCalc = () => {
  const number1 = Math.ceil(Math.random() * 100);
  const number2 = Math.ceil(Math.random() * 100);
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
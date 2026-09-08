import getAnswer from '../getAnswer.js';
const playCalc = (userName) => {
    console.log('What is the result of the expression?');
    for (let round = 0; round < 3; round += 1) {
        const number1 = Math.ceil(Math.random()*100);
        const number2 = Math.ceil(Math.random()*100);
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
        console.log(`Question: ${number1} ${action} ${number2}`);
        const userAnswer = getAnswer();
        if (Number(userAnswer) !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
            return;   
        }
        console.log('Correct!')
    }
    console.log(`Congratulations, ${userName}!`);
}
export default playCalc
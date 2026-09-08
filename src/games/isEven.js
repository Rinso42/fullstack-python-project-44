import getAnswer from '../getAnswer';
const evenCheck = (number) => number % 2 === 0;
const playIsEven = (userName) => {
    console.log ('Answer "yes" if the number is even, otherwise answer "no".');
    for (let round = 0; round < 3; round += 1) {
        const number = Math.ceil(Math.random()*100);
        const correctAnswer = evenCheck(number) ? 'yes' : 'no';
        console.log(`Question: ${number}`);
        const userAnswer = getAnswer();
        if (userAnswer !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }
        console.log('Correct!');
    }
    console.log(`Congratulations ${userName}!`)
}
export default playIsEven;
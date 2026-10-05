import getProgression from '../functions/getProgression.js';
const playProgression = () => {
  const start = Math.floor(Math.random() * 20) + 1;
  const step = Math.floor(Math.random() * 10) + 1;
  const length = Math.floor(Math.random() * 6) + 5;
  const progression = getProgression(start, step, length);
  const hiddenIndex = Math.floor(Math.random() * length);
  const correctAnswer = progression[hiddenIndex];
  const altProgression = [];
  for (let index = 0; index < progression.length; index += 1) {
    if (index === hiddenIndex) {
      altProgression.push('..');
    } else {
      altProgression.push(progression[index]);
    }
  }
  const question = altProgression.join(' ');
  return [question, correctAnswer];
};
export default playProgression;
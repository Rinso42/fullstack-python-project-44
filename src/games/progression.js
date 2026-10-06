import getProgression from '../functions/getProgression.js';
export const description = 'What number is missing in the progression?'
const playProgression = () => {
  const minStart = 1;
  const maxStart = 20;
  const minStep = 1;
  const maxStep = 10;
  const range = 6;
  const minLength = 5;
  const start = Math.floor(Math.random() * maxStart) + minStart;
  const step = Math.floor(Math.random() * maxStep) + minStep;
  const length = Math.floor(Math.random() * range) + minLength;
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
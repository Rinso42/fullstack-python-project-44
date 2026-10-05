const getProgression = (start, step, length) => {
  const progression = [];
  for (let index = 0; index < length; index += 1) {
    const currentElement = start + index * step;
    progression.push(currentElement);
  }
  return progression;
};
export default getProgression;
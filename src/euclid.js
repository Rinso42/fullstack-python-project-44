const euclid = (a, b) => {
  let x = a;
  let y = b;
  while (y !== 0) {
    const z = x % y;
    x = y;
    y = z;
  }
  return x;
};
export default euclid
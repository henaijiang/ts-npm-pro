const random = function(min = 0, max = 1) {
  return min + Math.random()*(max - min);
};
export { random }
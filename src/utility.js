function getRandomPointInTheUniverse(left, top, bottom, right) {
  const x = Math.random() * (right - left) + left;
  const y = Math.random() * (bottom - top) + top;
  return [x, y];
}

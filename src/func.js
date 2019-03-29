function sequence(n) {
  const array = [];
  for (let i = 1; i <= n; i++) {
   array.push(i);
  }
  return array;
};

function sum(array) {
  let sum = 0;
  for (const n of array) {
    sum += n;
  }
  return sum;
};

module.exports = {
  sequence,
  sum
};

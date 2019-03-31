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

function isPrime(n) {
  if (n === 1) {
    return false;
  }
  for (let i = 2; i < n/2; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

module.exports = {
  sequence,
  sum,
  isPrime
};

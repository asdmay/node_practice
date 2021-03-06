const { sequence, sum, isPrime } = require('./func');

test('nを渡したら1からnの整数の配列を返す', () => {
  expect(sequence(5)).toEqual([1, 2, 3, 4, 5]);
});

test('数字の配列を渡したらそれらを合計した数を返す', () => {
  expect(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(55);
});

test('素数渡したらtrueを返す', () => {
  expect(isPrime(2)).toBe(true);
  expect(isPrime(7)).toBe(true);
  expect(isPrime(53)).toBe(true);
  expect(isPrime(97)).toBe(true);
  expect(isPrime(6700417)).toBe(true);
  expect(isPrime(2147483647)).toBe(true);

  expect(isPrime(1)).toBe(false);
  expect(isPrime(54)).toBe(false);
  expect(isPrime(100)).toBe(false);
});

const { sequence, sum } = require('./func');

test('nを渡したら1からnの整数の配列を返す', () => {
  expect(sequence(5)).toEqual([1, 2, 3, 4, 5]);
});

test('数字の配列を渡したらそれらを合計した数を返す', () => {
  expect(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(55);
});

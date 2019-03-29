const { sequence } = require('./func');

test('nを渡したら1からnの整数の配列を返す', () => {
  expect(sequence(5)).toEqual([1, 2, 3, 4, 5]);
});

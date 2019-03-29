const fizzbuzz = require('./fizzbuzz');

test('3の倍数のときはfizzを返す', () => {
  expect(fizzbuzz(3)).toBe('fizz');
  expect(fizzbuzz(6)).toBe('fizz');
  expect(fizzbuzz(9)).toBe('fizz');
});

test('5の倍数のときはfizzを返す', () => {
  expect(fizzbuzz(5)).toBe('buzz');
  expect(fizzbuzz(10)).toBe('buzz');
});

test('15の倍数のときはfizzを返す', () => {
  expect(fizzbuzz(15)).toBe('fizzbuzz');
  expect(fizzbuzz(30)).toBe('fizzbuzz');
  expect(fizzbuzz(45)).toBe('fizzbuzz');
});

test('3の倍数でも5の倍数でもないときはそのまま返す', () => {
  expect(fizzbuzz(4)).toBe(4);
  expect(fizzbuzz(8)).toBe(8);
  expect(fizzbuzz(16)).toBe(16);
});

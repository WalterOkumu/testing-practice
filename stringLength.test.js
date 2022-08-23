const stringLength = require('./stringLength.js');

test('takes any string as an argument and returns its characters count', () => {
  expect(stringLength('word')).toBe(4);
});

test('returns error on character count less than 1', () => {
  expect(stringLength('')).toBe('Error, text length should be more than 1 and less than 10');
});

test('returns error on character count more than 10', () => {
  expect(stringLength('BUCKJUMPING')).toBe('Error, text length should be more than 1 and less than 10');
});
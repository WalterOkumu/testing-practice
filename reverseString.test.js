const reverseString = require('./reverseString.js');

test('take a string as an argument and return it reversed', () => {
  expect(reverseString('word')).toBe('drow');
});
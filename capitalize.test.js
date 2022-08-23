const capitalize = require('./capitalize.js');

test('take a string as an argument and return it reversed', () => {
  expect(capitalize('word')).toBe('Word');
});
const stringLength = (string) => {
  let count;

  if (string.length < 1 || string.length > 10) {
    return 'Error, text length should be more than 1 and less than 10';
  }

  string.split('').forEach((char, index) => {
    count = index + 1;
  });
  return count;
};

module.exports = stringLength;
const reverseString = (string) => {
  const splitString = string.split('');
  const reversed = splitString.reverse();

  return reversed.join('');
};

module.exports = reverseString;
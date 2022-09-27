const countLetters = function(sentence) {
  let output = {};
  const input = sentence.split(" ").join("");
  for (let char of input) {
    if (output[char]) {
      output[char] += 1;
    } else {
      output[char] = 1;
    }
  }
  return output;
};

module.exports = countLetters;
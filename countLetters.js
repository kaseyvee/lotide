const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

//const result = countLetters("hello hi");
//
//assertEqual(result["h"], 2);
//assertEqual(result["e"], 1);
//assertEqual(result["l"], 2);
//assertEqual(result["o"], 1);
//assertEqual(result["i"], 1);
//
//// visual check
//console.log(result);

module.exports = countLetters;
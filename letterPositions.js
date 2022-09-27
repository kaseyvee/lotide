const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  let valid = true;

  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        valid = false;
      }
    }
  } else {
    valid = false;
  }
  return valid;
};

const letterPositions = function(sentence) {
  const results = {};
  for (let char of sentence) {
    results[char] = [];
    for (let i = 0; i < sentence.length; i++) {
      if (char === sentence[i]) {
        results[char].push(i);
      }
    }
  }
  return results;
};


const result = letterPositions("hello");

assertArraysEqual(result["h"], [0]);
assertArraysEqual(result["e"], [1]);
assertArraysEqual(result["l"], [2, 3]);
assertArraysEqual(result["o"], [4]);

// visual check
console.log(result);
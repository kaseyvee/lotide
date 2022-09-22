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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const eqArrays = function(array1, array2) {
  let valid = false;
  for (let i = 0; i < array2.length; i++) {
    if (array1[i] === array2[i]) {
      valid = true;
    } else {
      valid = false;
    }
  }
  return valid;
};

const result = letterPositions("hello");

assertArraysEqual(result["h"], [0]);
assertArraysEqual(result["e"], [1]);
assertArraysEqual(result["l"], [2, 3]);
assertArraysEqual(result["o"], [4]);
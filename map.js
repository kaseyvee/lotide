const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  let valid = false;
  if (array1.length === 0 && array2.length === 0) {
    valid = true;
  } else if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        valid = true;
      } else {
        valid = false;
      }
    }
  }
  return valid;
};

//const words = ["ground", "control", "to", "major", "tom"];
//
//const results1 = map(words, word => word[0]);
//const results2 = map(words, word => word.length);
//const results3 = map(words, word => word + "s");
//
//assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
//assertArraysEqual(results2, [6, 7, 2, 5, 3]);
//assertArraysEqual(results3, ["grounds", "controls", "tos", "majors", "toms"]);

module.exports = map;
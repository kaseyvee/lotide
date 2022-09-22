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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
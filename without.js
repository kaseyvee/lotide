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
  }
  return valid;
};

const without = function(original, removeMe) {
  let newArr = [];

  for (let item of original) {
    if (!removeMe.includes(item)) {
      newArr.push(item);
    }
  }
  return newArr;
};

const someArr = [1, 2, 3];
assertArraysEqual(without(someArr, [1]), [2, 3]);
assertArraysEqual(without(someArr, [1, 2, 3]), []);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, 3]), ["1", "2", "3"]);

// make sure orginal is not modified
without(someArr, [1]);
assertArraysEqual(someArr, [1, 2, 3]);

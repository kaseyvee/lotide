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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(array) {
  let newArr = [];
  if (array.length > 2 && array.length % 2 !== 0) {
    newArr.push(array[Math.floor(array.length / 2)]);
  } else if (array.length > 2 && array.length % 2 === 0) {
    newArr.push(array[(array.length / 2) - 1], array[(array.length / 2)]);
  }
  return newArr;
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle(["a", "b", "c", "d"]), ["b", "c"]);
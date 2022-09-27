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

const flatten = function(someArr) {
  let newArr = [];
  
  for (let item of someArr) {
    if (Array.isArray(item)) {
      for (let value of item) {
        newArr.push(value);
      }
    } else {
      newArr.push(item);
    }
  }
  return newArr;
};


//assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
//assertArraysEqual(flatten([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
//assertArraysEqual(flatten([[1, 2], [3, 4], [5, 6]]), [1, 2, 3, 4, 5, 6]);

module.exports = flatten;
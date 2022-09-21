const eqArrays = function(array1, array2) {
  let valid = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      valid = false;
    }
  }
  return valid;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
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
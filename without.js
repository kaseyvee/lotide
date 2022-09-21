const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const eqArrays = function(array1, array2) {
  let valid = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      valid = false;
    }
  }
  return valid;
};

const without = function(original, removeMe) {
  let newArr = [];
  // iterate through original
  for (let item of original) {
    if (!removeMe.includes(item)) {
      newArr.push(item);
    }
  }
  return newArr;
};

const someArr = [1, 2, 3];
assertArraysEqual(without(someArr, [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

// make sure orginal is not modified
assertArraysEqual(someArr, [1, 2, 3]);

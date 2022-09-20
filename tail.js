const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let newArr = [];
  for (let i = 1; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
};

// check that original array is unchanged
const words = ["hi", "hello", "yo"];
tail(words);
assertEqual(words.length, 3);

// check that returned elements are correct
assertEqual(tail(words).length, 2);
assertEqual(words[0], "hi");
assertEqual(words[1], "hello");

// check returned elements
console.log(tail(words));
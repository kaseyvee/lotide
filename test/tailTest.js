const tail = require('../tail.js');
const assertEqual = require('../assertEqual.js');

// check that original array is unchanged
const words1 = ["hi", "hello", "yo"];
assertEqual(words1.length, 3);
assertEqual(words1[0], "hi");

// check that returned elements are correct
const result1 = tail(words1);
assertEqual(result1.length, 2);
assertEqual(result1[0], "hello");
assertEqual(result1[1], "yo");

// only 1 item in array yields empty array
const words2 = ["hello"];
const result2 = tail(words2);
assertEqual(result2.length, 0);
assertEqual(result2[0], undefined);
console.log("empty array result", result2); // confirm empty

// empty array yields empty array
const words3 = [];
const result3 = tail(words3);
assertEqual(result3.length, 0);
assertEqual(result3[0], undefined);
console.log("empty array result", result3); // confirm empty
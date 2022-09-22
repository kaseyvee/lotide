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

const eqObjects = function(object1, object2) {
  let valid = false;
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let item in object1) {
      if (Array.isArray(object1[item])) {
        if (eqArrays(object1[item], object2[item])) {
          valid = true;
        } else {
          valid = false;
        }
      } else {
        if (object1[item] === object2[item]) {
          valid = true;
        } else {
          valid = false;
        }
      }
    }
  }
  return valid;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const ba = { b: "2", a: "1" };
const ab = { a: "1", b: "2" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(ba, ab);
assertObjectsEqual(ba, abc);
assertObjectsEqual(cd, dc);
assertObjectsEqual(ba, cd2);
assertObjectsEqual(dc, cd2);



const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
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

const ba = { b: "2", a: "1" };
const ab = { a: "1", b: "2" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);
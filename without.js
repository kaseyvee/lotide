const without = function(original, removeMe) {
  let newArr = [];

  for (let item of original) {
    if (!removeMe.includes(item)) {
      newArr.push(item);
    }
  }
  return newArr;
};

//const someArr = [1, 2, 3];
//assertArraysEqual(without(someArr, [1]), [2, 3]);
//assertArraysEqual(without(someArr, [1, 2, 3]), []);
//assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
//assertArraysEqual(without(["1", "2", "3"], [1, 2, 3]), ["1", "2", "3"]);
//
//// make sure orginal is not modified
//without(someArr, [1]);
//assertArraysEqual(someArr, [1, 2, 3]);

module.exports = without;

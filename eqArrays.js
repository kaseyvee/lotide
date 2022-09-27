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

module.exports = eqArrays;
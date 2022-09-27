const takeUntil = function(array, callback) {
  let output = [];
  for (let item of array) {
    if (!callback(item)) {
      output.push(item);
    } else {
      return output;
    }
  }
};

module.exports = takeUntil;
const tail = function(array) {
  if (array.length === 1 || array === [])
    return [];

  let newArr = array;
  newArr.shift();
  return newArr;
};

module.exports = tail;
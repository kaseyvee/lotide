const letterPositions = function(sentence) {
  const results = {};
  for (let char of sentence) {
    results[char] = [];
    for (let i = 0; i < sentence.length; i++) {
      if (char === sentence[i]) {
        results[char].push(i);
      }
    }
  }
  return results;
};

module.exports = letterPositions;
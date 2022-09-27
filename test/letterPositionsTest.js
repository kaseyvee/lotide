const assert = require('chai').assert;
const lotide = require('../index');

describe("#letterPositions", () => {

  it("returns {'h': [0], 'e': [1], 'l': [2, 3], 'o': [4]} for hello", () => {
    assert.deepEqual(lotide.letterPositions("hello"), {'h': [0], 'e': [1], 'l': [2, 3], 'o': [4]});
  });

  it("returns {'l': [0, 2], 'o': [1]} for lol", () => {
    assert.deepEqual(lotide.letterPositions("lol"), {'l': [0, 2], 'o': [1]});
  });
  
});

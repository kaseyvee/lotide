const assert = require('chai').assert;
const _ = require('../index');

describe("#letterPositions", () => {

  it("returns {'h': [0], 'e': [1], 'l': [2, 3], 'o': [4]} for hello", () => {
    assert.deepEqual(_.letterPositions("hello"), {'h': [0], 'e': [1], 'l': [2, 3], 'o': [4]});
  });

  it("returns {'l': [0, 2], 'o': [1]} for lol", () => {
    assert.deepEqual(_.letterPositions("lol"), {'l': [0, 2], 'o': [1]});
  });
  
});

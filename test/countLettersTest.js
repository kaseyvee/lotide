const assert = require('chai').assert;
const lotide = require('../index');

describe("#countLetters", () => {

  it("returns {'h': 1, 'e': 1, 'l': 2, 'o': 1} for hello", () => {
    assert.deepEqual(lotide.countLetters("hello"), {'h': 1, 'e': 1, 'l': 2, 'o': 1});
  });

  it("returns {'l': 2, 'o': 1} for lol", () => {
    assert.deepEqual(lotide.countLetters("lol"), {'l': 2, 'o': 1});
  });
  
});

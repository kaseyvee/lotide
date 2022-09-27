const assert = require('chai').assert;
const _ = require('../index');

describe("#findKey", () => {

  it('returns first matched key - "noma"', () => {
    let input = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
    };
    assert.deepEqual(_.findKey(input, x => x.stars === 2), "noma");
  });

  it('returns first matched key - "Akaleri"', () => {
    let input = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
    };
    assert.deepEqual(_.findKey(input, x => x.stars === 3), "Akaleri");
  });
  
});

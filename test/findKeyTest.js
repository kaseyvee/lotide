const assert = require('chai').assert;
const lotide = require('../index');

describe("#findKey", () => {

  it('returns first matched key - "noma"', () => {
    let input = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
    };
    assert.deepEqual(lotide.findKey(input, x => x.stars === 2), "noma");
  });

  it('returns first matched key - "Akaleri"', () => {
    let input = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
    };
    assert.deepEqual(lotide.findKey(input, x => x.stars === 3), "Akaleri");
  });
  
});

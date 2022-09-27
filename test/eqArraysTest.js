const assert = require('chai').assert;
const lotide = require('../index');

describe("#eqArrays", () => {

  it("returns true for [1, 2, 3] and [1, 2, 3]", () => {
    assert.isTrue(lotide.eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it("returns false for ['5'] and ['5', '6']", () => {
    assert.isFalse(lotide.eqArrays(['5'], ['5', '6']));
  });
  
  it("returns false for ['Hello', 'Lighthouse', 'Labs'] and ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.isFalse(lotide.eqArrays(["Hello", "Lighthouse", "Labs"], ['Hello', 'Lighthouse', 1]));
  });
  
});
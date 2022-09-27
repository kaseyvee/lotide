const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {

  it("returns true for [1, 2, 3] and [1, 2, 3]", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it("returns false for ['5'] and ['5', '6']", () => {
    assert.isFalse(eqArrays(['5'], ['5', '6']));
  });
  
  it("returns false for ['Hello', 'Lighthouse', 'Labs'] and ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.isFalse(eqArrays(["Hello", "Lighthouse", "Labs"], ['Hello', 'Lighthouse', 1]));
  });
  
});
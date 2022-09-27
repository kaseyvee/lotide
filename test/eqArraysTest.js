const assert = require('chai').assert;
const _ = require('../index');

describe("#eqArrays", () => {

  it("returns true for [1, 2, 3] and [1, 2, 3]", () => {
    assert.isTrue(_.eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it("returns false for ['5'] and ['5', '6']", () => {
    assert.isFalse(_.eqArrays(['5'], ['5', '6']));
  });
  
  it("returns false for ['Hello', 'Lighthouse', 'Labs'] and ['Hello', 'Lighthouse', 1]", () => {
    assert.isFalse(_.eqArrays(["Hello", "Lighthouse", "Labs"], ['Hello', 'Lighthouse', 1]));
  });
  
});
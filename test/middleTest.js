const assert = require('chai').assert;
const lotide = require('../index');

describe("#middle", () => {

  it("returns [] for [1]", () => {
    assert.deepEqual(lotide.middle([1]), []);
  });

  it("returns [] for [1, 2]", () => {
    assert.deepEqual(lotide.middle([1, 2]), []);
  });
  
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(lotide.middle([1, 2, 3]), [2]);
  });

  it("returns ['b', 'c'] for ['a', 'b', 'c', 'd']", () => {
    assert.deepEqual(lotide.middle(["a", "b", "c", "d"]), ["b", "c"]);
  });

});
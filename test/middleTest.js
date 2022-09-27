const assert = require('chai').assert;
const _ = require('../index');

describe("#middle", () => {

  it("returns [] for one item arrays", () => {
    assert.deepEqual(_.middle([1]), []);
  });

  it("returns [] for two item arrays", () => {
    assert.deepEqual(_.middle([1, 2]), []);
  });
  
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(_.middle([1, 2, 3]), [2]);
  });

  it("returns ['b', 'c'] for ['a', 'b', 'c', 'd']", () => {
    assert.deepEqual(_.middle(["a", "b", "c", "d"]), ["b", "c"]);
  });

});
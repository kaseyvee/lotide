const assert = require('chai').assert;
const _ = require('../index');

describe("#tail", () => {

  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(_.tail([1, 2, 3]), [2, 3]);
  });
  
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(_.tail(["Hello", "Lighthouse", "Labs"]), ['Lighthouse', 'Labs']);
  });

  it("returns [] for one item arrays", () => {
    assert.deepEqual(_.tail(['5']), []);
  });

  it("returns [] for empty arrays", () => {
    assert.deepEqual(_.tail([]), []);
  });

});
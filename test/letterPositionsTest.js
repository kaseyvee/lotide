const assert = require('chai').assert;
const lotide = require('../index');

describe("#head", () => {

  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), 'Hello');
  });

  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });
  
});

//assertArraysEqual(result["h"], [0]);
//assertArraysEqual(result["e"], [1]);
//assertArraysEqual(result["l"], [2, 3]);
//assertArraysEqual(result["o"], [4]);

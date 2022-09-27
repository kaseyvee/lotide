const assert = require('chai').assert;
const lotide = require('../index');

describe("#lotide", () => {

  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(lotide.head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(lotide.head(['5']), '5');
  });
  
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(lotide.head(["Hello", "Lighthouse", "Labs"]), 'Hello');
  });

  it("returns undefined for []", () => {
    assert.strictEqual(lotide.head([]), undefined);
  });
  
});
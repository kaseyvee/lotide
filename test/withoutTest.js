const assert = require('chai').assert;
const lotide = require('../index');

describe("#without", () => {

  it("returns [2, 3] for [1, 2, 3] and [1]", () => {
    assert.deepEqual(lotide.without([1, 2, 3], [1]), [2, 3]);
  });

  it('returns ["1", "2", "3"] for ["1", "2", "3"] and [1, 2, 3]', () => {
    assert.deepEqual(lotide.without(["1", "2", "3"], [1, 2, 3]), ["1", "2", "3"]);
  });
  
});

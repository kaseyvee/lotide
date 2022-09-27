const assert = require('chai').assert;
const _ = require('../index');

describe("#map", () => {

  it('returns ["grounds", "controls", "tos", "majors", "toms"] for ["ground", "control", "to", "major", "tom"] and word => word + "s"', () => {
    assert.deepEqual(_.map(["ground", "control", "to", "major", "tom"], word => word + "s"), ["grounds", "controls", "tos", "majors", "toms"]);
  });

  it('returns [6, 7, 2, 5, 3] for ["ground", "control", "to", "major", "tom"] and word => word.length', () => {
    assert.deepEqual(_.map(["ground", "control", "to", "major", "tom"], word => word.length), [6, 7, 2, 5, 3]);
  });

});
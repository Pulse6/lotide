const assert = require('chai').assert;
// const assert = chai.assert
const middle   = require('../middle');

describe("middle", () => {
  it("returns [2, 3] input [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});
// const assertArraysEqual = require('../assertArraysEqual')
// const middle = require('../middle')

// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
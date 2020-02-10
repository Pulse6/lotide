const assert = require('chai').assert;
// const assert = chai.assert
const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

describe("assertEqual", () => {
  it(`returns true when input is [1, 2, 3], [1, 2, 3]`, () => {
    assert.isTrue(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });
});

// const eqArrays = require('../eqArrays');
// const assertArraysEqual = require('../assertArraysEqual');

// assertArraysEqual([1, 2, 3], [1, 2, 3]);
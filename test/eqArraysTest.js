const assert = require('chai').assert;
// const assertEqual = require('../assertEqual');
// const assert = chai.assert
const eqArrays   = require('../eqArrays');

describe("eqArrays", () => {
  it(`returns true if [1, 2, 3] = [1, 2, 3]`, () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]), [1, 2, 3], [1, 2, 3]);
  });
  it(`returns false if [1, 2, 3] != [3, 2, 1]`, () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]), [1, 2, 3], [3, 2, 1]);
  });
});



// const eqArrays = require('../eqArrays');
// const assertEqual = require('../assertEqual');

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)// => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false
const assert = require('chai').assert;
const head = require('../head');
// const assertEqual = require('../assertEqual');
// const assert = chai.assert
const assertEqual   = require('../assertEqual');

describe("assertEqual", () => {
  it(`returns 5 when input is [5, 6, 7]`, () => {
    assert.equal(head([5,6,7]), 5);
  });
});


// // assertEqualTest.js
// const assertEqual = require('../assertEqual');
// const head = require('../head');

// assertEqual((head([5,6,7])), 5)

// // module.exports = assertEqual;
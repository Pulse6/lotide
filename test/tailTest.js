const assert = require('chai').assert;
// const assertEqual = require('../assertEqual');
// const assert = chai.assert
const tail   = require('../tail');

describe("tail", () => {
  it(`returns 3 input "Yo Yo", "Lighthouse", "Labs" `, () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});



// // tailTest.js
// const tail = require('../tail');
// const assertEqual = require('../assertEqual');

// // assertEqual((tail([5,6,7])), 7);

// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!


// // module.exports = tail;

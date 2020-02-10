// FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log("✅✅✅ Assertion Passed:" + actual + " === " + expected);
//   } else if (actual !== expected) {
//     console.log("🛑🛑🛑 Assertion Passed:" + '"' + actual + '"' + " !== " + '"' + expected + '"');
//   }
// };
const assertEqual = require('./assertEqual');

const head = function (arr) {
  return arr[0];
}

// assertEqual((head([5,6,7])), 5)
module.exports = head;


// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
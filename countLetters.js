// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed:" + actual + " === " + expected);
  } else if (actual !== expected) {
    console.log("🛑🛑🛑 Assertion Passed:" + '"' + actual + '"' + " !== " + '"' + expected + '"');
  }
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

const countLetters = function (str) {
  const result = {};
  for (const item of str) {
    // console.log(item);
    // console.log(result[item]);
    if (item in result) {
      result[item] += 1;
    } else {
      result[item] = 1;
    }
  }
  // console.log(result);
  return result;
};

// console.log(countLetters("lighthouse in the house"));
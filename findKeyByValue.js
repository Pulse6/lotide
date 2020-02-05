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

const findKeyByValue = function (obj, keyWord) {
  const keyarr = Object.keys(obj);
  // console.log(Object.keys(obj))
  for (const key of keyarr) {
    // console.log(key)
    // console.log(obj[key])
    if (keyWord === obj[key]) {
      // console.log(key)
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
// console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));
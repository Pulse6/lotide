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

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

///////////////////////

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const obj1key = Object.keys(object1);
  const obj2key = Object.keys(object2);
  if (obj1key.length !== obj2key.length) {
    return false;
  }
  for (const key of obj1key) {
    if (Array.isArray(object1[key])) {
      return eqArrays(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(assertObjectsEqual(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(assertObjectsEqual(ab, abc)); // => false

// assertObjectsEqual(eqObjects(ab, ba), true);
// assertObjectsEqual(eqObjects(ab, abc), false);

// console.log(`Example label: ${inspect(actual)}`);
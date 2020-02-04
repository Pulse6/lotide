// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)// => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("✅✅✅");
  } else {
    console.log("🛑🛑🛑");
  }
};

// assertArraysEqual([1, 2, 3], [1, 2, 3]);

const middle = function(arr) {
  let mid = [];
  if (arr < 1) {
    return  mid;
  }
}

console.log(middle([1]))
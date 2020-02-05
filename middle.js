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
  const midIndex = (arr.length - 1) / 2;
  if (arr.length < 3) {
    return  mid;
  } else if (arr[midIndex] % 1 === 0) {
    mid.push(arr[midIndex]);
  } else {
    mid.push(arr[Math.floor(midIndex)], arr[Math.floor(midIndex + 1)]);
  }
  return mid;
};

// console.log(middle([1, 2, 3, 4]));
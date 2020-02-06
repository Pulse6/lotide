const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed:" + actual + " === " + expected);
  } else if (actual !== expected) {
    console.log("🛑🛑🛑 Assertion Passed:" + '"' + actual + '"' + " !== " + '"' + expected + '"');
  }
};

// const findKey = function (obj, cb) {
//   // console.log(Object.values(obj))
//   // console.log(obj)
//   for (let key in obj) {
//     // console.log(obj[key])
//     if (cb(obj[key])) {
//       console.log(key);
//       break;
//     }
//   }
// };

const findKey = function(obj, cb) {
  for (let [key, value] of Object.entries(obj)) {
    if (cb(value)) {
      return key;
    }
  }
};

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"


// const findKeyByValue = function (obj, keyWord) {
//   const keyarr = Object.keys(obj);
//   // console.log(Object.keys(obj))
//   for (const key of keyarr) {
//     // console.log(key)
//     // console.log(obj[key])
//     if (keyWord === obj[key]) {
//       // console.log(key)
//       return key;
//     }
//   }
// };
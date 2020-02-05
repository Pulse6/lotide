const letterPositions = function(sentence) {
  // const noSpace = sentence.split(" ").join("");
  // const arr = sentence.split();
  // console.log(arr)
  const result = {};
  // const entries = Object.entries(noSpace)
  // console.log(entries)
  // const keys = Object.keys(sentence)
  // console.log(keys)
  for (let i = 0; i < sentence.length; i++) {
    // console.log(keys[i])
    if (sentence[i] in result) {
      result[sentence[i]].push(i);
    } else {
      result[sentence[i]] = [i];
    }
  }
  // console.log(result)
  delete result[" "];
  return result;
};

console.log(letterPositions("lighthouse in the house"));
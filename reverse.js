const args = process.argv;
arr = args.slice(2,args.length);
// console.log(arr)
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i])
};

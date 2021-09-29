const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  return nums.indexOf(n) == -1 || nums.slice(-1) == n? null: nums[nums.indexOf(n) +1];
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!

  //Case 1:count1sand0s("11000")
  return [...str].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {});
  //or
  return [...str].map(Number).reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a}, {});
  //result: {"0":3,"1":2}  
  //that means convert to number array is no use in this stage

  /*
  difference from actual result: {1:2,0:3} 
  1. json key in descending order
  2. json key does not contain double quotes surround it
  */

  /*
  research:
  return array element into number - [...str].map(Number);
  In: count1sand0s("11000")
  Out: [1,1,0,0,0]

  reverse the json object key order descending - Object.keys(cnt).sort().reverse();
  example:
  const cnt = [...str].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {});
  const jsonKeySort = Object.keys(cnt).sort().reverse();
  In: count1sand0s("11000")
  Out: ["1","0"]
  */
  //not yet solved ...
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  return parseFloat(n.toString().split('').reverse().join('')) * Math.sign(n);
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
  return arrs.reduce((acc, curr) => acc + curr.reduce((acc2, curr2) => acc2 + curr2,0), 0);
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  var [first, last] = [arr.splice(0,1), arr.splice(-1)];
  return  [...last, ...arr, ...first];
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};

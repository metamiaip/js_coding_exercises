const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  return nums.indexOf(n) == -1 || nums.slice(-1) == n? null: nums[nums.indexOf(n) +1];
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  return [...str].reduce((arr, element) => { arr[element] = arr[element] ? arr[element] + 1 : 1; return arr }, {});
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
  return (JSON.stringify(haystack).replace(/"/g, '').toLowerCase().indexOf(searchTerm) != -1);  
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  return str.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').match(/\w+/ig).map(item => item.toLowerCase()).reduce(function(str,item){return str.hasOwnProperty(item)?++str[item]:str[item]=1,str},{});
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

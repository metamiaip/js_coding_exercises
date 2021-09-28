function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  return nums.filter(value => value < 1);
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  return names.filter(value => value.substring(0,1) ==char);
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  return words.filter(value => value.substring(0,3) =="to ");
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  return nums.filter( (num) => num > 0 && num % parseInt(num) === 0 );
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  return users.map( user => user.data.city.displayName);
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  return nums.map( num => +Math.sqrt(num).toFixed(2));
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  return sentences.filter( value => value.toLowerCase().includes(str));
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  return triangles.map( value => Math.max(...value));
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};

function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  return Array.isArray(nums) && nums.length!=0 ? nums.map(item => item * item) : nums;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  var words_shift = words.shift(); 
  return words_shift + words.map(item => item.charAt(0).toUpperCase() + item.substring(1)).join('');                           
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  return people.reduce((sum, item) => sum + (item.subjects.length !=0? item.subjects.length:0),0);
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
  return menu.reduce((sum, item) => sum + (item.ingredients.filter(subitem => subitem === ingredient).length > 0? 1:0),0) > 0 ? true: false;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
  return arr1.filter(value => arr2.includes(value)).filter((value, index, self) => self.indexOf(value) === index).sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};

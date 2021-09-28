function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  return Array.isArray(nums) && nums.length!=0 ? nums.map(x => x * x) : nums;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  var words_shift = words.shift(); 
  return words_shift + words.map(a => a.charAt(0).toUpperCase() + a.substring(1)).join('');                           
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  return people.reduce((sum, p) => sum + (p.subjects.length !=0? p.subjects.length:0),0);
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
  return menu.reduce((sum, m) => sum + (m.ingredients.filter(t => t === ingredient).length > 0? 1:0),0) > 0 ? true: false;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
  //reference: 
  //https://www.freakyjolly.com/javascript-compare-arrays-get-matching-values-from-two-arrays/
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  //Note: 
  /*
  1.arr1.filter(value => arr2.includes(value))
  - use arr1.filter to check if each value exists in arr2
  - arr2.includes(value) return true or false
  - finally return an array with all duplicate numbers
  
  2.filter((value, index, self) => self.indexOf(value) === index)
  - use arrow function syntax: filter((element, index, array) => { ... } )
  - to prevent duplicate value in the matching array in (1)
  - e.g. if (1) return [12, 5, 5, 23, 5, 23, 99]
  - final return should get the distinct values from the above array
  - for part 2 syntax, a bit confused
  - The indexOf() method searches an array for a specified item and returns its position.
  - guess: self.indexOf(value) 
  - e.g. loop element 2 (=5), self.indexOf(5) return position 1, 1 === 1 > yes, return this element
  - e.g. loop element 3 (=5), self.indexOf(5) return position 1, 1 === 2 > no, skip this element
  */
  return arr1.filter(value => arr2.includes(value)).filter((value, index, self) => self.indexOf(value) === index).sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};

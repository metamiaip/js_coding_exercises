function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  return person.city =="Manchester";
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  return Math.ceil(people / 40);
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  return arr.reduce((acc, item) => (item === "sheep" ? acc + 1 : acc), 0);
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  return (person.address.postCode.charAt(0) =="M" && person.address.city == "Manchester");
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};

function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
  return JSON.parse(JSON.stringify(sandwich)).fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  return JSON.parse(JSON.stringify(person)).city =="Manchester"? true:false;
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  return Math.ceil(people / 40);
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  return arr.reduce((a, v) => (v === "sheep" ? a + 1 : a), 0);
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  //const obj = JSON.parse(JSON.stringify(person));
  return person.address.postCode.charAt(0) =="M" && person.address.city == "Manchester"? true:false;
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};

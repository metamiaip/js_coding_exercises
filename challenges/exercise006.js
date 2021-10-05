/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");
  return arr.reduce((sumArr, num) => num%3==0||num%5==0? sumArr + num:sumArr,0);
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");
  const strDNA = ["C", "G", "T", "A"];
  const splitInput = str.toUpperCase().split('');

  for (let i = 0; i < splitInput.length; i++) {
    if (!strDNA.includes(splitInput[i])) {
      return false;
    }
  }
  return true;
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */

 const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");

  let strOut = "";
  let strSplit = str.toUpperCase().split('');

  strSplit.forEach((element) => {
    switch(element)
    {
      case "A":
        strOut += "T";
        break;
      case "C":
        strOut += "G";
        break;
      case "T":
        strOut += "A";
        break;
      case "G":
        strOut += "C";
        break;
    }
  })
  return strOut;
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");
  if (n===1) {
    return false;
  }else if(n === 2){
    return true;
  }else{
    for(var x = 2; x < n; x++){
      if(n % x === 0){
        return false;
      }
    }
    return true;  
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
  if (!Number.isInteger(Math.sqrt(n))) throw new Error("n is not a square number(e.g. sq num of 9 is 3");
  
  return Array(Math.sqrt(n)).fill(Array(Math.sqrt(n)).fill(fill));
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");

  let count = 0;
  for (let i = 0; i < staff.length; i++) {
    for (let j = 0; j < staff[i].rota.length; j++) {
      if (staff[i].rota[j] === day) {
        count++;
      }
    }
  };
  return (count >= 3);
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime ,
  createMatrix,
  areWeCovered
};

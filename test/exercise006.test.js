const {
    sumMultiples,
    //isValidDNA,
    //getComplementaryDNA,
    isItPrime  //,
    //createMatrix,
    //areWeCovered
  } = require("../challenges/exercise006");

describe("sumMultiples", () => {
    test("return the sum of any numbers which are a multiple of 3 or 5 in the array", () => {  
      expect(sumMultiples([3,5])).toBe(8);
      expect(sumMultiples([1,3,5,7])).toBe(8);
      expect(sumMultiples([1,3,5,15])).toBe(23);
      expect(sumMultiples([])).toBe(0);
    });
});

//C,G,T,A
describe("isItPrime", () => {
    test("return true/false depending on whether it is a prime number or not", () => {  
        expect(isItPrime(1)).toBe(false);
        expect(isItPrime(2)).toBe(true);
        expect(isItPrime(3)).toBe(true);
        expect(isItPrime(137)).toBe(true);
    });
});

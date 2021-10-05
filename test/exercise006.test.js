const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
  } = require("../challenges/exercise006");

describe("sumMultiples", () => {
    test("return the sum of any numbers which are a multiple of 3 or 5 in the array", () => {  
      expect(sumMultiples([3,5])).toBe(8);
      expect(sumMultiples([1,3,5,7])).toBe(8);
      expect(sumMultiples([1,3,5,15])).toBe(23);
      expect(sumMultiples([])).toBe(0);
    });
});

describe("isValidDNA", () => {
  test("receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only", () => {  
    expect(isValidDNA("CGTA")).toBe(true);  
    expect(isValidDNA("BCDE")).toBe(false);  
    expect(isValidDNA("")).toBe(false);
  });
});

describe("getComplementaryDNA", () => {
  test("receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only", () => {  
    expect(getComplementaryDNA("ACTG")).toBe("TGAC");  
  });
});

describe("isItPrime", () => {
    test("return true/false depending on whether it is a prime number or not", () => {  
        expect(isItPrime(1)).toBe(false);
        expect(isItPrime(2)).toBe(true);
        expect(isItPrime(3)).toBe(true);
        expect(isItPrime(137)).toBe(true);
    });
});

describe("createMatrix", () => {
  test("receive a number and return an array of n arrays, each filled with n items", () => {  
      expect(createMatrix(9,"foo")).toBe([["foo","foo","foo"],["foo","foo","foo"],["foo","foo","foo"]]);
      expect(createMatrix(7,"foo")).toBe("n is not a square number(e.g. sq num of 9 is 3");
  });
});

describe("areWeCovered", () => {
  test("return true/false depending on whether there are enough staff scheduled for the given day", () => {
      // Note that the objects provided to the function could have any keys/values
    const staffs = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "John", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Ben", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] }
    ];
    expect(areWeCovered(staffs, "Saturday")).toBe(true);

    // Note that the objects provided to the function could have any keys/values
    const staffs2 = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "John", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Ben", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] }
    ];
    expect(areWeCovered(staffs2, "Monday")).toBe(false);
  });
});
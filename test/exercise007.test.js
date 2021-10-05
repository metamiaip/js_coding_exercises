const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
  } = require("../challenges/exercise007");

  describe("getScreentimeAlertList", () => {
    test("returns username if users who have used more than 100 minutes of screentime for a given date", () => {
        const usr=  [
            {
              username: "beth_1234",
              name: "Beth Smith",
              screenTime: [
                           { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                           { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                           { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                           { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                          ]
             },
             {
              username: "sam_j_1989",
              name: "Sam Jones",
              screenTime: [
                           { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                           { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                           { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                          ]
             }
           ];
      expect(getScreentimeAlertList(usr, "2019-05-04")).toBe(["beth_1234"]);
  
      // Note that the objects provided to the function could have any keys/values
      const usr2=  [
        {
          username: "beth_1234",
          name: "Beth Smith",
          screenTime: [
                       { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                       { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                       { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                       { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                      ]
         },
         {
          username: "sam_j_1989",
          name: "Sam Jones",
          screenTime: [
                       { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                       { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                       { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                      ]
         }
       ];
      expect(getScreentimeAlertList(usr2, "2019-06-14")).toBe([]);
    });
});

describe("hexToRGB", () => {
    test("transform the hex code into an RGB code", () => {
      expect(hexToRGB("#ffffff")).toBe({"R":255,"G":255,"B":255});
    });
  });

describe("sumDigits", () => {
    test("takes a number, e.g. 123 and returns the sum of all its digits", () => {
      expect(sumDigits(123)).toBe(6);
      expect(sumDigits(456)).toBe(15);
    });
  });

describe("createRange", () => {
    test("creates a range of numbers as an array", () => {
      expect(createRange(3,11,2)).toBe([3,5,7,9,11]);
      expect(createRange(2,10,2)).toBe([2,4,6,8,10]);
      expect(createRange(2,10)).toBe([2,3,4,5,6,7,8,9,10]);
    });
  });

  
describe("findWinner", () => {
  test("return X or 0 from a 3x3 noughts and crosses board array if either one is won or return no winner", () => {
    const game1 = [
      ["X", "0", "0"],
      ["0", "X", "0"],
      ["X", null, "X"]
    ];
    expect(findWinner(game1)).toBe("X");

    const game2 = [
      [null, "0", "X"],
      ["X", "X", "0"],
      ["X", null, "0"]
    ];
    expect(findWinner(game2)).toBe("X");

    const game3 = [
      ["0", "0", "X"],
      ["0", "0", "X"],
      ["X", null, "0"]
    ];
    expect(findWinner(game3)).toBe("0");
    
    const game4 = [
      [null, "X", "0"],
      ["X", "0", "X"],
      ["0", null, "X"]
    ];
    expect(findWinner(game4)).toBe("0");
    
    const game5 = [
      [null, "0", "0"],
      ["X", "X", "X"],
      ["0", null, "X"]
    ];
    expect(findWinner(game5)).toBe("X");
    
    const game6 = [
      [null, "X", "X"],
      ["0", "0", "0"],
      ["X", null, "X"]
    ];
    expect(findWinner(game6)).toBe("0");
    
  });
});
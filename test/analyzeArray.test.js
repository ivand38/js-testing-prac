const analyzeArray = require("../code/analyzeArray");
test("Array must be analyzed", () => {
  expect(analyzeArray([3, 9, 18, 0, 5, 6, 11])).toEqual({
    average: 7.43,
    min: 0,
    max: 18,
    length: 7,
  });
});

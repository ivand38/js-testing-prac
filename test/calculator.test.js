const calculator = require("../code/calculator");

test("adds 1 + 2 to equal 3", () => {
  expect(calculator(1, "+", 2)).toBe(3);
});

test("subtracts 4 - 2 to equal 2", () => {
  expect(calculator(4, "-", 2)).toBe(2);
});

test("multiplies 2 * 2 to equal 4", () => {
  expect(calculator(2, "*", 2)).toBe(4);
});

test("divides 9 / 3 to equal 3", () => {
  expect(calculator(9, "/", 3)).toBe(3);
});

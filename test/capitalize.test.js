const capitalize = require("../code/capitalize");

test("first character should be capitalized", () => {
  expect(capitalize("hello")).toBe("Hello");
});

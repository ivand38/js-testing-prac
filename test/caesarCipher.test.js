const caesarCipher = require("../code/caesarcipher");

test("Word must be encrypted", () => {
  expect(caesarCipher("Hello, World", 4)).toBe("Lipps, Asvph");
});

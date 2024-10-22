function caesarCipher(string, shift) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (char.match(/[a-z]/i)) {
      let code = string.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
    }
    result += char;
  }
  return result;
}

module.exports = caesarCipher;

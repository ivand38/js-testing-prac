function reversedString(word) {
  const reversedWord = word.split("").reverse().join("");
  return reversedWord;
}

module.exports = reversedString;

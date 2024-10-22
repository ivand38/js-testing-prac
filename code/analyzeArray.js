function analyzeArray(array) {
  let sum = 0;
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
  }
  let averageResult = sum / array.length;
  return {
    average: Number(averageResult.toFixed(2)),
    min: min,
    max: max,
    length: array.length,
  };
}

module.exports = analyzeArray;

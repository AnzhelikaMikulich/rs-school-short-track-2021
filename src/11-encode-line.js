/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  const result = [];
  let n = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] === arr[i]) {
      n++;
    } else if (n === 1) {
      result.push(arr[i]);
    } else {
      result.push(n + arr[i]);
      n = 1;
    }
  }
  return result.join('');
}

module.exports = encodeLine;

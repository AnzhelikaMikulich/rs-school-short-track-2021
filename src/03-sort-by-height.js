/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arr1 = [];
  let arr2 = [];
  arr.forEach((e, i) => {
    if (e < 0) {
      arr1.push(i);
    }
  });
  arr2 = arr.filter((el) => el > 0).sort((a, b) => a - b);
  arr1.forEach((e) => {
    arr2 = arr2.slice(0, e).concat(-1).concat(arr2.slice(e));
  });
  return arr2;
}

module.exports = sortByHeight;

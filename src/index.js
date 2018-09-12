/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(testArray = []) {
  let count = 0
  testArray.map((el, index) => {
    if (index === testArray[testArray[testArray[index] - 1] - 1] - 1 && index + 1 !== testArray[index]) {
      count++
    }
  })
  return count = count / 3
};

/*
 * @lc app=leetcode.cn id=931 lang=javascript
 *
 * [931] 下降路径最小和
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */

// const { createPrinter } = require('./utils/index')
// const printer = createPrinter()

var minFallingPathSum = function(matrix) {
  let n = matrix.length
  let res = Infinity

  for (let j = 0; j < matrix[0].length; j++) {
    res = Math.min(res, dp(matrix, n - 1, j))
  }
  return res

  function dp(matrix, i, j) {
    // printer.logEnter(`i=${i}, j=${j}`)
    if (i < 0 || j < 0 || i >= matrix.length || j >= matrix[0].length) {
      //   printer.logReturn(9999)
      return 9999
    }
    if (i === 0) {
      //   printer.logReturn(matrix[i][j])
      return matrix[i][j]
    }
    let res =
      matrix[i][j] +
      min(
        dp(matrix, i - 1, j - 1),
        dp(matrix, i - 1, j),
        dp(matrix, i - 1, j + 1)
      )
    // printer.logReturn(res)
    return (
      matrix[i][j] +
      min(
        dp(matrix, i - 1, j - 1),
        dp(matrix, i - 1, j),
        dp(matrix, i - 1, j + 1)
      )
    )
  }
  function min(a, b, c) {
    return Math.min(a, Math.min(b, c))
  }
}

// @lc code=end

module.exports = { minFallingPathSum }

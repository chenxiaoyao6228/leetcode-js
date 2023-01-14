/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */

// const { createPrinter } = require('./utils/index')
// const printer = createPrinter()

// dp[i][j] = Math.min(grid[i-1][j], grid[i][j-1])
// solution1:
// var minPathSum = function(grid) {
//   const n = grid.length
//   const m = grid[0].length
//   let memo = new Array(n).fill(-1).map(() => new Array(m).fill(-1))
//   let res = dp(grid, n - 1, m - 1)
//   return res

//   function dp(grid, i, j) {
//     if (i === 0 && j === 0) {
//       return grid[0][0]
//     }

//     if (i < 0 || j < 0) {
//       return Infinity
//     }
//     if (memo[i][j] !== -1) {
//       return memo[i][j]
//     }
//     memo[i][j] = Math.min(dp(grid, i - 1, j), dp(grid, i, j - 1)) + grid[i][j]
//     return memo[i][j]
//   }
// }

// solution2
var minPathSum = function(grid) {
  let n = grid.length
  let m = grid[0].length
  let dp = new Array(n).fill(0).map(() => new Array(m).fill(0))
  dp[0][0] = grid[0][0]
  // base case, i && j should start with index 1
  for (let i = 1; i < n; i++) {
    // ! do not mess dp with grid
    dp[i][0] = dp[i - 1][0] + grid[i][0]
  }
  for (let j = 1; j < m; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j]
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
    }
  }
  return dp[n - 1][m - 1]
}

// @lc code=end

module.exports = { minPathSum }

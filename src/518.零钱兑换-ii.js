/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
// animation: https://www.bilibili.com/video/BV1pY4y1J7na
var change = function(amount, coins) {
  // can we shift 'n+1' with 'amount' ? => row is for constrain
  // r for row(constrain, backpack capacity), j for col(value)
  // dp[i][j] definition: use coins[0...i-1]
  const n = coins.length
  const dp = new Array(n + 1).fill(0).map(() => new Array(amount + 1).fill(0))
  // base case:
  // since we init all cells value to 0, so the folllowing lines are just for explanation
  // for (let j = 0; j <= amount; j++) {
  //   dp[0][j] = 0
  // }

  //  j(amount) = 0: don't need to choose any thing, and have 1 solution already
  for (let row = 0; row <= n; row++) {
    dp[row][0] = 1 // dp[2][0]
  }
  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= amount; col++) {
      // still have enough space for coins[i-1]
      if (col >= coins[row - 1]) {
        dp[row][col] = dp[row - 1][col] + dp[row][col - coins[row - 1]]
      } else {
        dp[row][col] = dp[row - 1][col]
      }
    }
  }
  return dp[n][amount]
}

// @lc code=end

module.exports = { change }

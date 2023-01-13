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
var change = function(amount, coins) {
  const n = coins.length
  const dp = new Array(n + 1).fill(0).map(() => new Array(amount + 1).fill(0))
  // dp[i][j] definition: use coins[0...i-1]

  // base case:
  // since we init all cells value to 0, so the folllowing lines are just for explanation
  // for (let j = 0; j <= amount; j++) {
  //   dp[0][j] = 0
  // }

  //  j(amount) = 0: don't need to choose any thing, and have 1 solution already
  for (let i = 0; i <= n; i++) {
    dp[i][0] = 1
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= amount; j++) {
      // still have enough space for coins[i-1]
      if (j >= coins[i - 1]) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]]
      } else {
        dp[i][j] = dp[i - 1][j]
      }
    }
  }
  return dp[n][amount]
}

// @lc code=end

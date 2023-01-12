/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  let sum = nums.reduce((cur, pre) => cur + pre, 0)
  if (sum % 2 !== 0) return false
  let n = nums.length
  sum = sum / 2
  // i as row, sum as column
  const dp = new Array(n + 1).fill(0).map(() => new Array(sum + 1).fill(false))
  dp[0][nums[0]] = true
  for (let i = 0; i <= n; i++) {
    dp[i][0] = true
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum; j++) {
      if (j - nums[i] < 0) {
        dp[i][j] = dp[i - 1][j]
      } else {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]]
      }
    }
  }
  return dp[n][sum]
}
// canPartition([1, 2, 3, 4])
// @lc code=end

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
// video animation : https://www.bilibili.com/video/BV1pY4y1J7na
var canPartition = function(nums) {
  let sum = nums.reduce((cur, pre) => cur + pre, 0)
  if (sum % 2 !== 0) return false
  let n = nums.length
  // convert to 0-1 backpack problem
  sum = sum / 2
  // i as row, sum as column
  /*
  [
      j → → 
   i [0,0,_],
   ↓ [0,_,_],  => dp[i][j] is infer from its top(dp[i-1][j]) and its lefttop(dp[i-1][j-nums[i-1]])
   ↓ [0,_,_]
  ]*/
  const dp = new Array(n + 1).fill(0).map(() => new Array(sum + 1).fill(false))
  // i = 0: you have no items to choose, so it will always be false
  // since we init all cells value to 0, so the folllowing lines are just for explanation
  // for (let j = 0; j <= sum; j++) {
  //   dp[0][j] = false
  // }

  // j（sum） = 0: you don't need to choose any thing
  for (let i = 0; i <= n; i++) {
    dp[i][0] = true
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum; j++) {
      // not enough space to the (i)th item to fit in, so will inherit from it its above pos in dp table
      // ❗ we count from 1, and array index start from 0, so the (i)th item should be nums[i-1]
      if (j < nums[i - 1]) {
        dp[i][j] = dp[i - 1][j]
      } else {
        // next state depends on two prev state choices, if any of these choices works, then return true
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]]
      }
    }
  }
  return dp[n][sum]
}

module.exports = { canPartition }
// @lc code=end

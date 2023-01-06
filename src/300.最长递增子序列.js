/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  const dp = new Array(nums.length).fill(1)
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  let res = 0
  for (let k = 0; k < dp.length; k++) {
    res = Math.max(res, dp[k])
  }
  return res
}
// console.log(lengthOfLIS([1, 4, 3, 4, 2, 3]))
// @lc code=end

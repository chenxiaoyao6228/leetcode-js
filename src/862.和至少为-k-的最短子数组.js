/*
 * @lc app=leetcode.cn id=862 lang=javascript
 *
 * [862] 和至少为 K 的最短子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function(nums, k) {
  let sum = 0,
    minLen = Infinity
  let left = 0,
    right = 0

  while (right < nums.length) {
    sum += nums[right]
    right++

    while (sum >= k) {
      sum -= nums[left]
      minLen = Math.min(minLen, right - left)
      left++
    }
  }

  return minLen === Infinity ? -1 : minLen
}

// @lc code=end

module.exports = { shortestSubarray }

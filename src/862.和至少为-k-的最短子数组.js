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
  const n = nums.length
  const preSumArr = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    preSumArr[i + 1] = preSumArr[i] + nums[i]
  }
  let res = n + 1
  const queue = []
  for (let i = 0; i <= n; i++) {
    const curSum = preSumArr[i]
    // optimization-1
    while (queue.length > 0 && curSum - preSumArr[queue[0]] >= k) {
      res = Math.min(res, i - queue.shift())
    }
    // optimization-2
    while (queue.length > 0 && preSumArr[queue[queue.length - 1]] >= curSum) {
      queue.pop()
    }
    queue.push(i)
  }
  return res < n + 1 ? res : -1
}

// @lc code=end

module.exports = { shortestSubarray }

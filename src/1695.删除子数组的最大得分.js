/*
 * @lc app=leetcode.cn id=1695 lang=javascript
 *
 * [1695] 删除子数组的最大得分
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
  let sum = 0
  let res = -Infinity
  let j = 0
  let set = new Set()
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]

    // when window contains duplicate value
    while (set.has(nums[i])) {
      set.delete(nums[j]) // delete
      sum -= nums[j] // update
      j++
    }
    set.add(nums[i])
    res = Math.max(res, sum)
  }
  return res
}

// @lc code=end

module.exports = { maximumUniqueSubarray }

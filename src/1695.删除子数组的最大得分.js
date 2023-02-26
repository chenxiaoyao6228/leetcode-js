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
  let left = 0
  let set = new Set()
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right]

    // when window contains duplicate value, remove previous value until it contains no duplicate
    while (set.has(nums[right])) {
      set.delete(nums[left]) // delete
      sum -= nums[left] // update
      left++
    }
    set.add(nums[right])
    res = Math.max(res, sum)
  }
  return res
}

// @lc code=end

module.exports = { maximumUniqueSubarray }

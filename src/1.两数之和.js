/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let complements = {}
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i]
    // do not use if(complments[current]) for condition checking
    // for complements[current] could be 0 or negative
    if (complements[current] != undefined) {
      return [complements[current], i]
    }
    let complement = target - current
    complements[complement] = i
  }
}
// @lc code=end

module.exports = { twoSum }

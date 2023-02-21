/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  let results = []
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 3; i++) {
    while (i > 0 && i < nums.length - 3 && nums[i] === nums[i - 1]) {
      i++
    }
    for (let j = i + 1; j < nums.length - 2; j++) {
      while (j > i + 1 && j < nums.length - 2 && nums[j] === nums[j - 1]) {
        j++
      }
      let low = j + 1
      let high = nums.length - 1
      let newTarget = target - (nums[i] + nums[j])
      while (low < high) {
        let partialSum = nums[low] + nums[high]
        if (partialSum === newTarget) {
          results.push([nums[i], nums[j], nums[low], nums[high]])
          high--
          low++
          while (low < high && nums[low] === nums[low - 1]) {
            low++
          }
          while (low < high && nums[high] === nums[high + 1]) {
            high--
          }
        } else if (partialSum > newTarget) {
          high--
        } else {
          low++
        }
      }
    }
  }
  return results
}
// @lc code=end

module.exports = { fourSum }

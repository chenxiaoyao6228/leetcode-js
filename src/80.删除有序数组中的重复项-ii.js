/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const len = nums.length
  if (len < 2) {
    return len
  }
  let slow = 2
  let fast = 2
  while (fast < nums.length) {
    // [1,1,1,2] => slow = 2, fast = 3
    // => nums[slow-2] == nums[0] == 1 !== 2 =>  should update
    if (nums[slow - 2] !== nums[fast]) {
      nums[slow] = nums[fast]
      slow++
    }
    fast++
  }
  return slow
}
// @lc code=end

module.exports = { removeDuplicates }

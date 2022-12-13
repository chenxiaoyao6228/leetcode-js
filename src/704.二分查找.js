/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// [1,2,3,4,5,6], 3 => 2
var search = function(nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      right = mid - 1
    }
  }
  return -1
}
console.log(search([1, 2, 3, 4, 5, 6], 3))
// @lc code=end

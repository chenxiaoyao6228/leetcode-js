/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  return [leftBound(nums, target), rightBound(nums, target)]

  function leftBound(nums, target) {
    let left = 0,
      right = nums.length - 1
    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2)
      if (nums[mid] < target) {
        left = mid + 1
      } else if (nums[mid] > target) {
        right = mid - 1
      } else if (nums[mid] == target) {
        right = mid - 1
      }
    }
    if (left >= nums.length || nums[left] != target) {
      return -1
    }
    return left
  }
  function rightBound(nums, target) {
    let left = 0,
      right = nums.length - 1
    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2)
      if (nums[mid] < target) {
        left = mid + 1
      } else if (nums[mid] > target) {
        right = mid - 1
      } else if (nums[mid] == target) {
        left = mid + 1
      }
    }
    if (right < 0 || nums[right] != target) {
      return -1
    }
    return right
  }
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
// @lc code=end

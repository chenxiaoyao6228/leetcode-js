/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  // base case
  if (!height || height.length <= 1) return 0
  // two pointer, calculate the area of two pointers
  // upate totalSum and update the one with lower height each time
  let max = 0
  let left = 0
  let right = height.length - 1
  while (left < right) {
    const deltaX = right - left
    let leftVal = height[left]
    const rightVal = height[right]
    let area = Math.min(leftVal, rightVal) * deltaX
    max = Math.max(max, area)
    if (leftVal < rightVal) {
      left++
    } else {
      right--
    }
  }
  return max
}
// @lc code=end

module.exports = { maxArea }

/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// v1
// time  complexity O(n)
// space complexity O(1)
// var moveZeroes1 = function(nums) {
//   let k = 0
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i]) {
//       nums[k] = nums[i]
//       k++
//     }
//   }
//   for (let j = k; j < nums.length; j++) {
//     nums[j] = 0
//   }
//   return nums
// }

// v2
// time  complexity O(n)
// space complexity O(1)
// preserve [0, k] as none-zero collections
var moveZeroes = function(nums) {
  let slow = 0
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      if (fast !== slow) {
        swap(slow, fast)
      }
      slow++
    }
  }
  return nums
  function swap(a, b) {
    let temp = nums[b]
    nums[b] = nums[a]
    nums[a] = temp
  }
}
// @lc code=end

module.exports = { moveZeroes }

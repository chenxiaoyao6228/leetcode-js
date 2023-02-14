/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  // Iterate through all elements of ar2[] starting from the last element
  for (let i = n - 1; i >= 0; i--) {
    /* Find the smallest element greater than ar2[i]. Move all
               elements one position ahead till the smallest greater
               element is not found */
    let j,
      last = nums1[m - 1]
    for (j = m - 2; j >= 0 && nums1[j] > nums2[i]; j--) {
      nums1[j + 1] = nums1[j]
    }

    // If there was a greater element
    if (last > nums2[i]) {
      nums1[j + 1] = nums2[i]
      nums2[i] = last
    }
  }
}
// @lc code=end

module.exports = { merge }

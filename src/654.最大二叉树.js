/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

// solution1
// var constructMaximumBinaryTree = function(nums) {
//   if (nums.length === 0) return null
//   if (nums.length === 1) return new TreeNode(nums[0])

//   let maxIndex = -1
//   let maxVal = -Infinity
//   let len = nums.length
//   for (let i = 0; i < len; i++) {
//     if (maxVal < nums[i]) {
//       maxVal = nums[i]
//       maxIndex = i
//     }
//   }
//   let root = new TreeNode(maxVal)
//   root.left =
//     maxIndex >= 0 ? constructMaximumBinaryTree(nums.slice(0, maxIndex)) : null
//   root.right =
//     maxIndex <= len - 1
//       ? constructMaximumBinaryTree(nums.slice(maxIndex + 1))
//       : null
//   return root
// }

// solution2
var constructMaximumBinaryTree = function(nums) {
  return build(nums, 0, nums.length - 1)
  // range: [lo,hi]
  function build(nums, lo, hi) {
    if (lo > hi) return null
    // find the largest num in the array
    let maxIndex = max(nums, lo, hi)
    // build root node
    let root = new TreeNode(nums[maxIndex])

    // build left and tree recursively
    root.left = build(nums, lo, maxIndex - 1)
    root.right = build(nums, maxIndex + 1, hi)

    return root
  }

  function max(nums, lo, hi) {
    let maxIndex = lo
    let maxNum = nums[lo]
    for (let index = lo; index <= hi; index++) {
      const num = nums[index]
      if (nums[index] > maxNum) {
        maxNum = num
        maxIndex = index
      }
    }
    return maxIndex
  }
}

// @lc code=end

module.exports = { constructMaximumBinaryTree }

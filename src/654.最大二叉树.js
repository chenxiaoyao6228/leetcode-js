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

var constructMaximumBinaryTree = function(nums) {
  return build(nums, 0, nums.length)
}

function build(nums, lo, hi) {
  if (lo > hi) return null
  // find the largest num in the array
  let maxIndex = max(nums, lo, hi)
  // build root node
  // eslint-disable-next-line
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

// @lc code=end

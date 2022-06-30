/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
 */

const { traverse } = require('@babel/core')

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
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let maxDiameter = 0
  maxDepth(root)
  return maxDiameter

  function maxDepth(root) {
    if (!root) return 0

    let leftMax = maxDepth(root.left)
    let rightMax = maxDepth(root.right)

    maxDiameter = Math.max(maxDiameter, leftMax + rightMax)
    return 1 + Math.max(leftMax, rightMax)
  }
}
// @lc code=end

/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
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
var findTilt = function(root) {
  let sumOfTilt = 0
  traverse(root)
  return sumOfTilt

  function traverse(root) {
    if (!root) return 0
    const left = traverse(root.left)
    const right = traverse(root.right)
    const tilt = Math.abs(left - right)
    sumOfTilt += tilt
    return left + right + root.val
  }
}
// @lc code=end

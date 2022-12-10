/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
var maxPathSum = function(root) {
  let res = -Infinity
  traverse(root)
  return res

  function traverse(root) {
    if (!root) return 0

    // handle left and right
    const left = Math.max(0, traverse(root.left))
    const right = Math.max(0, traverse(root.right))

    res = Math.max(res, left + right + root.val)
    return Math.max(left, right) + root.val
  }
}
// @lc code=end

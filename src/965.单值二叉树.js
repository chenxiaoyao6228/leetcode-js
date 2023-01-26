/*
 * @lc app=leetcode.cn id=965 lang=javascript
 *
 * [965] 单值二叉树
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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
  if (!root) return false
  let onlyVal = root.val
  let res = true
  traverse(root)
  return res
  function traverse(root) {
    if (!root) return
    if (root && root.val !== onlyVal) {
      res = false
    }
    root.left && traverse(root.left)
    root.right && traverse(root.right)
  }
}
// @lc code=end

module.exports = { isUnivalTree }

/*
 * @lc app=leetcode.cn id=783 lang=javascript
 *
 * [783] 二叉搜索树节点最小距离
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
var minDiffInBST = function(root) {
  let res = Infinity
  let preVal = Infinity
  traverse(root)
  return res

  function traverse(root) {
    if (!root) return
    traverse(root.right)
    res = Math.min(res, preVal - root.val)
    preVal = root.val
    traverse(root.left)
  }
}
// @lc code=end

module.exports = { minDiffInBST }

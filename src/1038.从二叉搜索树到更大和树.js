/*
 * @lc app=leetcode.cn id=1038 lang=javascript
 *
 * [1038] 从二叉搜索树到更大和树
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
 * @return {TreeNode}
 */
var bstToGst = function(root) {
  let currentSum = 0
  traverse(root)
  return root

  function traverse(root) {
    if (!root) return 0
    traverse(root.right)
    currentSum = currentSum + root.val
    root.val = currentSum
    traverse(root.left)
  }
}
// @lc code=end

module.exports = { bstToGst }

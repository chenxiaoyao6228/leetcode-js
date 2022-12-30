/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
// BST: inorder traverse is in increasing order,  so you don't have culculate every two nodes
var getMinimumDifference = function(root) {
  let pre = null
  let res = Infinity
  traverse(root)
  return res

  function traverse(root) {
    if (!root) return

    traverse(root.left)
    if (pre) {
      res = Math.min(res, root.val - pre.val)
    }
    pre = root
    traverse(root.right)
  }
}
// @lc code=end

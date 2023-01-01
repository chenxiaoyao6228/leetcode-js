/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
 */

const { traverse } = require('@babel/core')
const { check } = require('prettier')

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
// https://leetcode.cn/problems/subtree-of-another-tree/solutions/233896/ling-yi-ge-shu-de-zi-shu-by-leetcode-solution/
var isSubtree = function(root, subRoot) {
  return traverse(root, subRoot)

  function traverse(root, subRoot) {
    if (!root) {
      return false
    }
    return (
      isSameTree(root, subRoot) ||
      traverse(root.left, subRoot) ||
      traverse(root.right, subRoot)
    )
  }
  function isSameTree(t1, t2) {
    if (!t1 && !t2) return true
    if (!t1 || !t2 || t1.val !== t2.val) {
      return false
    }
    return isSameTree(t1.left, t2.left) && isSameTree(t1.right, t2.right)
  }
}
// @lc code=end

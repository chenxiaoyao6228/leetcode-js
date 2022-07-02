/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

const { find } = require('async')

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  // make sure val1 < val2
  let val1 = Math.min(p.val, q.val)
  let val2 = Math.max(p.val, q.val)
  return find(root, val1, val2)

  function find(root, val1, val2) {
    if (!root) return null

    if (val1 > root.val) {
      return find(root.right, val1, val2)
    }
    if (val2 < root.val) {
      return find(root.left, val1, val2)
    }
    return root
  }
}
// @lc code=end

/*
 * @lc app=leetcode.cn id=671 lang=javascript
 *
 * [671] 二叉树中第二小的节点
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
var findSecondMinimumValue = function(root) {
  let rootVal = root.val
  let res = -1 // everty node val is positive
  traverse(root)
  return res

  function traverse(root) {
    if (!root) return
    if (res !== -1 && root.val >= res) return
    // only update when value is smaller the current answer
    if (root.val > rootVal) {
      res = root.val
    }
    traverse(root.left)
    traverse(root.right)
  }
}
// @lc code=end

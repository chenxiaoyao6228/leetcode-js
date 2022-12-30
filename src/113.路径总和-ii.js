/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  const res = []
  const path = []
  let totalSum = 0
  traverse(root)
  return res

  function traverse(root) {
    if (!root) return
    totalSum += root.val
    path.push(root.val)
    // leaf node
    if (!root.left && !root.right) {
      if (totalSum == targetSum) {
        // add path
        res.push(path.slice(0))
      }
    }
    traverse(root.left)
    traverse(root.right)
    totalSum -= root.val
    path.pop(root.val)
  }
}
// @lc code=end

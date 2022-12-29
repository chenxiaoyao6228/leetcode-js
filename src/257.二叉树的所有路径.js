/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let path = []
  let res = []
  traverse(root)
  return res

  function traverse(root) {
    if (!root) return null
    // record path when reach to the leaf node
    if (!root.left && !root.right) {
      path.push(root.val)
      res.push(path.join('->'))
      path.pop()
      return
    }
    path.push(root.val)
    traverse(root.left)
    traverse(root.right)
    path.pop()
  }
}
// @lc code=end

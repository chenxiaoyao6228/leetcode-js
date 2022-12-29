/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
// traverse
var findBottomLeftValue = function(root) {
  let maxDepth = 0
  let depth = 0
  let res = root
  traverse(root)
  return res.val

  function traverse(root) {
    if (!root) return null
    depth++

    if (depth > maxDepth) {
      maxDepth = depth
      res = root
    }
    traverse(root.left)
    traverse(root.right)
    depth--
  }
}

// @lc code=end

/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
 * @return {number[]}
 */
// !! no extra hash table
var findMode = function(root) {
  let res = []
  let maxCount = 0
  let curCount = 0
  let preVal = null
  traverse(root)
  return res

  function traverse(root) {
    if (!root) return
    traverse(root.left)
    if (root.val === preVal) {
      curCount++
    } else {
      curCount = 1
    }

    if (curCount === maxCount) {
      res.push(root.val)
    } else if (curCount > maxCount) {
      res = [root.val]
      maxCount = curCount
    }
    preVal = root.val
    traverse(root.right)
  }
}

// @lc code=end

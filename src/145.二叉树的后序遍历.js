/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
// solution1
// var postorderTraversal = function(root) {
//   let res = []
//   if (!root) return res

//   res = res.concat(postorderTraversal(root.left))
//   res = res.concat(postorderTraversal(root.right))
//   res.push(root.val)
//   return res
// }

// solution2

var postorderTraversal = function(root) {
  let res = []
  traverse(root)
  return res

  function traverse(node) {
    if (!node) return
    traverse(node.left)
    traverse(node.right)
    res.push(node.val)
  }
}

// @lc code=end

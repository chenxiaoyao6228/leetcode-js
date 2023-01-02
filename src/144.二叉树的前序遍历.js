/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
// solution1: decomposition
// var preorderTraversal = function(root) {
//   if (!root) {
//     return []
//   }
//   if (!root.left && !root.right) {
//     return [root.val]
//   }
//   return [root.val]
//     .concat(preorderTraversal(root.left))
//     .concat(preorderTraversal(root.right))
// }

// solution2: traversal
var preorderTraversal = function(root) {
  let res = []
  traverse(root)
  return res

  function traverse(root) {
    if (!root) {
      return null
    }
    res.push(root.val)
    traverse(root.left)
    traverse(root.right)
  }
}

// solution3: bfs: use extra stack
// var preorderTraversal = function(root) {
//   const res = []
//   if (root == null) {
//     return res
//   }
//   const stack = [root]
//   while (stack.length) {
//     let cur = stack.pop()
//     res.push(cur.val)
//     cur.right && stack.push(cur.right)
//     cur.left && stack.push(cur.left)
//   }
//   return res
// }

// @lc code=end

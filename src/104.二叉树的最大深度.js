/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

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

// solution1: 动态规划思路
// var maxDepth = function(root) {
//   if (!root) {
//     return 0
//   }
//   var leftDepth = maxDepth(root.left)
//   var rightDepth = maxDepth(root.right)
//   return Math.max(leftDepth, rightDepth) + 1
// }

// solution2 回溯算法思路
var maxDepth = function(root) {
  var depth = 0
  var res = 0
  traverse(root)
  return res

  function traverse(root) {
    if (!root) {
      return
    }
    // 前序遍历位置
    depth++
    res = Math.max(res, depth)
    traverse(root.left)
    traverse(root.right)
    // 后续遍历位置
    depth--
  }
}

// @lc code=end

/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */

// solution1: 遍历的思维
// var invertTree = function(root) {
//   traverse(root)
//   return root
//   function traverse(root) {
//     if (!root) {
//       return null
//     }
//     var temp = root.left
//     root.left = root.right
//     root.right = temp

//     traverse(root.left)
//     traverse(root.right)
//   }
// }

// solution2: 分解的思维
var invertTree = function(root) {
  if (!root) {
    return null
  }
  var tempLeft = invertTree(root.left)
  var tempRight = invertTree(root.right)

  root.left = tempRight
  root.right = tempLeft
  return root
}
// @lc code=end

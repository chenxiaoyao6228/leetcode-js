/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
// iterative method
// var hasPathSum = function(root, targetSum) {
//   if (!root) return false
//   let found = false
//   let curSum = 0
//   let target = targetSum
//   traverse(root, target)
//   return found

//   function traverse(root) {
//     if (!root) return null

//     curSum += root.val
//     if (!root.left && !root.right) {
//       if (curSum == target) {
//         found = true
//       }
//     }

//     traverse(root.left)
//     traverse(root.right)

//     curSum -= root.val
//   }
// }

var hasPathSum = function(root, targetSum) {
  if (!root) return false

  // reach leaf node
  if (!root.left && !root.right && root.val == targetSum) {
    return true
  }

  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  )
}

// @lc code=end

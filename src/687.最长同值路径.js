/*
 * @lc app=leetcode.cn id=687 lang=javascript
 *
 * [687] 最长同值路径
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
// https://leetcode.cn/problems/longest-univalue-path/solutions/1790729/zui-chang-tong-zhi-lu-jing-by-leetcode-s-hgfk/
var longestUnivaluePath = function(root) {
  let res = 0
  traverse(root)
  return res

  function traverse(root) {
    if (!root) {
      return 0
    }
    let left = traverse(root.left),
      right = traverse(root.right)
    let left1 = 0,
      right1 = 0
    if (root.left && root.left.val === root.val) {
      left1 = left + 1
    }
    if (root.right && root.right.val === root.val) {
      right1 = right + 1
    }
    res = Math.max(res, left1 + right1)
    return Math.max(left1, right1)
  }
}

// wrong attempt
// var longestUnivaluePath = function(root) {
//   let curMax = 0
//   let [val, rootMax] = traverse(root)
//   return rootMax - 1 > curMax ? rootMax - 1 : curMax

//   function traverse(root) {
//     if (!root) {
//       return [null, 0]
//     }
//     if (!root.left && !root.right) {
//       return [root.val, 1]
//     }
//     const [leftVal, leftMax] = traverse(root.left)
//     const [rightVal, rightMax] = traverse(root.right)
//     if (root.val === leftVal && rightVal === root.val) {
//       return [root.val, leftMax + rightMax + 1]
//     } else if (root.val === leftVal && root.val !== rightVal) {
//       return [root.val, leftMax + 1]
//     } else if (root.val === rightVal && root.val !== leftVal) {
//       return [root.val, rightMax + 1]
//     } else {
//       curMax = Math.max(leftMax, rightMax) - 1
//       return [root.val, 1]
//     }
//   }
// }

// const { createBTFromArray } = require('./utils/bst')
// const root = createBTFromArray([1, 4, 5, 4, 4, null, 5])
// longestUnivaluePath(root)

// @lc code=end

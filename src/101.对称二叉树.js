/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */

var isSymmetric = function(root) {
  const travese = (root1, root2) => {
    if (!root1 && !root2) {
      return true
    }
    if (!root1 || !root2) {
      return false
    }
    if (root1.val === root2.val) {
      return (
        travese(root1.left, root2.right) && travese(root1.right, root2.left)
      )
    }
    return false
  }

  return travese(root.left, root.right)
}

// wrong attempt
// var isSymmetric = function(root) {
//   if (!root) {
//     return true
//   }
//   if (!root.left && !root.right) {
//     return true
//   }
//   if (!root.left || !root.right || root.left.val !== root.right.val) {
//     return false
//   }
//   return isSymmetric(root.left) && isSymmetric(root.right)
// }
// const { createBTFromArray } = require('./utils/bst')
// const root = createBTFromArray([1, 2, 2, 3, 4, 4, 3])
// const res = isSymmetric(root)
// console.log('res', res)
// @lc code=end

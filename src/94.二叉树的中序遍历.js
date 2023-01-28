/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */

// solution1:  traverse
// var inorderTraversal = function(root) {
//   let res = []
//   traverse(root)
//   return res

//   function traverse(root) {
//     if (!root) return

//     traverse(root.left)

//     res.push(root.val)

//     traverse(root.right)
//   }
// }

// solution2: decomposition
// var inorderTraversal = function(root) {
//   let res = []
//   if (!root) {
//     return res
//   }
//   res = res.concat(inorderTraversal(root.left))
//   res.push(root.val)
//   res = res.concat(inorderTraversal(root.right))
//   return res
// }

// solution3: interative
var inorderTraversal = function(root) {
  const res = []
  const stack = []
  let cur = root
  while (cur || stack.length) {
    if (cur) {
      stack.push(cur)
      cur = cur.left
    } else {
      cur = stack[stack.length - 1]
      res.push(cur.val)
      stack.pop()
      cur = cur.right
    }
  }
  return res
}

// @lc code=end

module.exports = { inorderTraversal }

/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
// var minDepth = function(root) {
//   if (!root) return 0
//   let queue = [root]
//   let res = 1

//   while (queue.length) {
//     let tempQueue = []
//     let isNull = false

//     queue.forEach(node => {
//       if (!node.left && !node.right) {
//         isNull = true
//       }
//       node.left && tempQueue.push(node.left)
//       node.right && tempQueue.push(node.right)
//     })
//     queue = tempQueue

//     if (isNull) {
//       break
//     } else {
//       res++
//     }
//   }
//   return res
// }

var minDepth = function(root) {
  if (!root) return 0
  let queue = [root]
  let depth = 1
  while (queue.length > 0) {
    let len = queue.length
    for (let i = 0; i < len; i++) {
      let node = queue.shift()
      if (!node.left && !node.right) {
        // exit the minDepth function
        return depth
      }
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    depth++
  }
  console.log('depth', depth)
  return depth
}

// const { createBTFromArray } = require('./utils/bst')
// const root = createBTFromArray([1, 2, 3, 4, null, null, 5])
// minDepth(root)

// @lc code=end

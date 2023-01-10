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

var minDepth = function(root) {
  // remember the base case !!
  if (!root) return 0
  let depth = 1
  let queue = [root]
  while (queue.length) {
    let len = queue.length
    for (let i = 0; i < len; i++) {
      let node = queue.shift()
      if (!node.left && !node.right) {
        return depth
      }
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    depth++
  }
  return depth
}

// const { createBTFromArray } = require('./utils/bst')
// const root = createBTFromArray([1, 2, 3, 4, null, null, 5])
// minDepth(root)

// @lc code=end

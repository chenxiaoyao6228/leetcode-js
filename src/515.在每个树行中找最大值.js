/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
var largestValues = function(root) {
  if (!root) return []
  const res = []
  root.depth = 0
  const queue = [root]
  while (queue.length > 0) {
    let node = queue.shift()

    if (res[node.depth] == undefined || node.val > res[node.depth]) {
      res[node.depth] = node.val
    }

    if (node.left) {
      node.left.depth = node.depth + 1
      queue.push(node.left)
    }
    if (node.right) {
      node.right.depth = node.depth + 1
      queue.push(node.right)
    }
  }
  return res
}
// @lc code=end

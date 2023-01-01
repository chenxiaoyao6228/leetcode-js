/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  // base case
  if (!root) return []
  let res = []
  let queue = [root]
  root.depth = 0
  while (queue.length) {
    const node = queue.shift()
    const { val, depth } = node

    if (!res[depth]) {
      res[depth] = [val]
    } else {
      if (depth % 2 === 0) {
        res[depth].push(val)
      } else {
        res[depth].unshift(val)
      }
    }

    // !!!!: not root.left
    let left = node.left
    if (left) {
      left.depth = depth + 1
      queue.push(left)
    }
    let right = node.right
    if (right) {
      right.depth = depth + 1
      queue.push(right)
    }
  }
  return res
}
// @lc code=end

/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function(root) {
  if (!root) return []
  root.depth = 0
  let queue = [root]
  let res = []
  while (queue.length) {
    let node = queue.shift()

    if (!res[node.depth]) {
      res[node.depth] = [node.val]
    } else {
      res[node.depth].push(node.val)
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

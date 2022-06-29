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
  // corner case
  if (!root) return []

  let res = [],
    queue = [root]
  root.depth = 0
  while (queue.length) {
    const node = queue.shift()
    const depth = node.depth

    if (!res[depth]) {
      res[depth] = [node.val]
    } else {
      res[depth].push(node.val)
    }

    // handle left and right
    const left = node.left
    if (left) {
      left.depth = depth + 1
      queue.push(left)
    }
    const right = node.right
    if (right) {
      right.depth = depth + 1
      queue.push(right)
    }
  }
  return res
}
// @lc code=end

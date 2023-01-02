/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
// tip: with tree height to solve this problem
var countNodes = function(root) {
  let l = root,
    r = root
  let hl = 0,
    hr = 0
  while (l) {
    l = l.left
    hl++
  }
  while (r) {
    r = r.right
    hr++
  }
  if (hl == hr) {
    return Math.pow(2, hl) - 1
  }
  // use normal method to count
  return countHelper(root)

  function countHelper(root) {
    if (!root) return 0
    return 1 + countHelper(root.left) + countHelper(root.right)
  }
}
// @lc code=end

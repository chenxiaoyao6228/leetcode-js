/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 * !!!! pay attention not to modify root in-place, so you cann't simply use pre-oroder traverse
 */
var flatten = function(root) {
  if (!root) {
    return
  }
  // flatten left and right node
  flatten(root.left)
  flatten(root.right)

  // now we can assume all left and right node are flatten
  // just simply move all right node to left and then move all left to right
  var left = root.left
  var right = root.right

  root.left = null
  root.right = left

  let r = root
  while (r.right) {
    r = r.right
  }
  r.right = right
}
// @lc code=end

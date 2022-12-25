/*
 * @lc app=leetcode.cn id=1008 lang=javascript
 *
 * [1008] 前序遍历构造二叉搜索树
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
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
  return build(preorder, 0, preorder.length - 1)
}

function build(preorder, start, end) {
  if (start > end) {
    return null
  }
  if (start == end) {
    return new TreeNode(preorder[start])
  }
  const rootVal = preorder[start]
  const rootNode = new TreeNode(rootVal)
  let idx = start + 1
  while (preorder[idx] < rootVal) {
    idx++
  }

  rootNode.left = build(preorder, start + 1, idx - 1)
  rootNode.right = build(preorder, idx, end)
  return rootNode
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

bstFromPreorder([8, 5, 1, 7, 10, 12])
// @lc code=end

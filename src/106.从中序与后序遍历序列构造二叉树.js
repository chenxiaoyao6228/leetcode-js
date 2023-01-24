/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

// draw the diagram first
function TreeNode(val) {
  this.val = val
  this.left = null
  this.right = null
}

var buildTree = function(inorder, postorder) {
  const memo = new Map()
  for (let i = 0, len = postorder.length; i < len; i++) {
    memo.set(inorder[i], i)
  }

  return build(
    inorder,
    0,
    inorder.length - 1,
    postorder,
    0,
    postorder.length - 1
  )

  function build(inorder, inStart, inEnd, postorder, postStart, postEnd) {
    // base case
    if (inStart > inEnd) {
      return null
    }
    // rootVal can be infered by preorder and postorder traverse
    let rootVal = postorder[postEnd]

    const rootNode = new TreeNode(rootVal)

    const rootIdxOfinorder = memo.get(rootVal)

    const leftSize = rootIdxOfinorder - inStart

    rootNode.left = build(
      inorder,
      inStart,
      rootIdxOfinorder - 1, // rootVal in excluded
      postorder,
      postStart,
      postStart + leftSize - 1
    )
    rootNode.right = build(
      inorder,
      rootIdxOfinorder + 1,
      inEnd,
      postorder,
      postStart + leftSize,
      postEnd - 1 // rootVal in excluded
    )

    return rootNode
  }
}
// @lc code=end

module.exports = { buildTree }

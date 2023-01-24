/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function TreeNode(val) {
  this.val = val
  this.left = null
  this.right = null
}

// preorder: |rootVal|(preStart+1)....(preStart+leftSize)|(preStart+leftSize+1)....(preEnd)|
// inorder:  |....|rootVal|.....|

var buildTree = function(preorder, inorder) {
  const memo = new Map()
  for (let i = 0, len = inorder.length; i < len; i++) {
    memo.set(inorder[i], i)
  }
  return build(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1)

  function build(preorder, preStart, preEnd, inorder, inStart, inEnd) {
    if (inStart > inEnd) {
      return null
    }

    const rootVal = preorder[preStart]
    const rootValIdxOfInorder = memo.get(rootVal)

    const rootNode = new TreeNode(rootVal)
    const leftSize = rootValIdxOfInorder - inStart

    rootNode.left = build(
      preorder,
      preStart + 1,
      preStart + leftSize,
      inorder,
      inStart,
      rootValIdxOfInorder - 1
    )
    rootNode.right = build(
      preorder,
      preStart + leftSize + 1,
      preEnd,
      inorder,
      rootValIdxOfInorder + 1,
      inEnd
    )

    return rootNode
  }
}

// @lc code=end

module.exports = { buildTree }

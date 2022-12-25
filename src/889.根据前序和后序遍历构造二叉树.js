/*
 * @lc app=leetcode.cn id=889 lang=javascript
 *
 * [889] 根据前序和后序遍历构造二叉树
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
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const map = new Map()
var constructFromPrePost = function(preorder, postorder) {
  for (let i = 0; i < postorder.length; i++) {
    const el = postorder[i]
    map.set(el, i)
  }
  return build(
    preorder,
    0,
    preorder.length - 1,
    postorder,
    0,
    postorder.length - 1
  )
}
// preorder: |(rootVal)|(leftRootVal)|..root.left...|(rightRootVal)|root.right|
// postorder: |..root.left...|(leftRootVal,idx)|..root.right..|(rightRootVal)|(rootVal)|
function build(preorder, preStart, preEnd, postorder, postStart, postEnd) {
  if (preStart > preEnd) {
    return null
  }
  // another base case
  if (preStart == preEnd) {
    return new TreeNode(preorder[preStart])
  }
  const rootVal = preorder[preStart]
  const leftRootVal = preorder[preStart + 1]
  const idx = map.get(leftRootVal)
  const leftSize = idx - postStart + 1
  const rootNode = new TreeNode(rootVal)

  rootNode.left = build(
    preorder,
    preStart + 1,
    preStart + leftSize,
    postorder,
    postStart,
    idx
  )
  rootNode.right = build(
    preorder,
    preStart + leftSize + 1,
    preEnd,
    postorder,
    idx + 1,
    postEnd - 1
  )

  return rootNode
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

// @lc code=end

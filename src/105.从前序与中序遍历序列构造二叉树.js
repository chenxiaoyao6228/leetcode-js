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
let map = new Map()
var buildTree = function(preorder, inorder) {
  for (let index = 0; index < inorder.length; index++) {
    const element = inorder[index]
    map.set(element, index)
  }
  return build(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1)
}
function build(preorder, preStart, preEnd, inorder, inStart, inEnd) {
  if (preStart > preEnd) {
    return null
  }
  let rootValue = preorder[preStart]
  // build root node
  let rootNode = new TreeNode(rootValue)

  let rootValIdxOfInorder = map.get(rootValue)
  // use inorder to determine preorder index
  let leftSize = rootValIdxOfInorder - inStart

  // build left and right node recursively
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

// 输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// 输出: [3,9,20,null,null,15,7]

function TreeNode(val) {
  this.val = val
  this.left = null
  this.right = null
}

const preorder = [3, 9, 20, 15, 7]
const inorder = [9, 3, 15, 20, 7]

const res = buildTree(preorder, inorder)
console.log('res', res)

// @lc code=end

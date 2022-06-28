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
let map = new Map()
var buildTree = function(inorder, postorder) {
  // create map
  for (let index = 0; index < inorder.length; index++) {
    const element = inorder[index]
    map.set(element, index)
  }
  // build recursively
  return build(
    inorder,
    0,
    inorder.length - 1,
    postorder,
    0,
    postorder.length - 1
  )
}

function build(inorder, inStart, inEnd, postorder, postStart, postEnd) {
  // base case
  if (inStart > inEnd) {
    return null
  }

  // build root
  let rootValue = postorder[postEnd]
  let rootNode = new TreeNode(rootValue)

  const rootIdxOfInorder = map.get(rootValue)
  const leftSize = rootIdxOfInorder - inStart

  // build left and right
  rootNode.left = build(
    inorder,
    inStart,
    rootIdxOfInorder - 1,
    postorder,
    postStart,
    postStart + leftSize - 1
  )
  rootNode.right = build(
    inorder,
    rootIdxOfInorder + 1,
    inEnd,
    postorder,
    postStart + leftSize,
    postEnd - 1
  )

  return rootNode
}

// 输入：inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
// 输出：[3,9,20,null,null,15,7]

function TreeNode(val) {
  this.val = val
  this.left = null
  this.right = null
}

const inorder = [9, 3, 15, 20, 7]
const postorder = [9, 15, 7, 20, 3]

const res = buildTree(inorder, postorder)
console.log('res', res)
// @lc code=end

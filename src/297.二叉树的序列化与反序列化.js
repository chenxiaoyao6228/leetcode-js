/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const NULL = 'NULL'
var serialize = function(root) {
  let res = []
  serializeHelper(root, res)
  return res.join(',')
}

function serializeHelper(root, res) {
  // base case
  if (!root) {
    res.push(NULL)
    return
  }
  res.push(root.val)
  serializeHelper(root.left, res)
  serializeHelper(root.right, res)
  return res
}

const node = {
  val: 1,
  left: { val: 2, left: { val: 3, left: null, right: null }, right: null },
  right: { val: 4, left: { val: 5, left: null, right: null }, right: null }
}

let res = serialize(node)
console.log('res', res)

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(dataStr) {
  const nodeList = dataStr.split(',')
  return deserializeHelper(nodeList)
}

function deserializeHelper(nodeList) {
  if (!nodeList.length) return null
  const rootVal = nodeList.shift()
  if (rootVal === 'NULL') {
    return null
  }
  const root = new TreeNode(rootVal)

  root.left = deserializeHelper(nodeList)
  root.right = deserializeHelper(nodeList)

  return root
}

function TreeNode(val) {
  this.val = val
  this.left = null
  this.right = null
}

let res2 = deserialize(res)
console.log('res2', res2)

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

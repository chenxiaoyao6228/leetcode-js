/*
 * @lc app=leetcode.cn id=988 lang=javascript
 *
 * [988] 从叶结点开始的最小字符串
 */

const { traverse } = require('@babel/core')

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
 * @return {string}
 */
// 节点数字和最小
// 满足自底向上或者自顶向下递增 [x]
var smallestFromLeaf = function(root) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let res = ''
  const path = []
  traverse(root)
  return res

  function traverse(root) {
    if (!root) return
    // add choice
    // no need to reverse
    path.unshift(root.val)
    // reach left val
    if (!root.left && !root.right) {
      let s = path.map(p => alphabet[p]).join('')
      if (res == '') {
        res = s
      } else {
        res = s.localeCompare(res) === 1 ? res : s
      }
    }
    traverse(root.left)
    traverse(root.right)
    // undo choice
    path.shift()
  }
}
// const { createBTFromArray } = require('./utils/bst')
// const ast = createBTFromArray([0, 1, 2, 3, 4, 3, 4])
// smallestFromLeaf(ast)
// @lc code=end

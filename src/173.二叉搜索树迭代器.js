/*
 * @lc app=leetcode.cn id=173 lang=javascript
 *
 * [173] 二叉搜索树迭代器
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
 */
var BSTIterator = function(root) {
  this.stack = []
  this.pushLeftBranch(root)
}

BSTIterator.prototype.pushLeftBranch = function(p) {
  while (p) {
    this.stack.push(p)
    p = p.left
  }
}

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  const p = this.stack.pop()
  this.pushLeftBranch(p.right)
  return p.val
}

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.stack.length > 0
}
// https://mp.weixin.qq.com/s/jI8_-E6rx2HVBOmuQOTgHg
// const { createASTFromArray } = require('./utils/bst')
// const ast = createASTFromArray([7, 3, 15, null, null, 9, 20])
// const bSTIterator = new BSTIterator(ast)

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end

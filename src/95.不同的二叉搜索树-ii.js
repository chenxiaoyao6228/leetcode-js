/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
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
 * @param {number} n
 * @return {TreeNode[]}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var generateTrees = function(n) {
  if (n == 0) return []
  return build(1, n)

  function build(lo, hi) {
    const result = []
    if (lo > hi) {
      return [null]
    }
    for (let i = lo; i <= hi; i++) {
      const leftTree = build(lo, i - 1)
      const rightTree = build(i + 1, hi)
      for (let j = 0; j < leftTree.length; j++) {
        for (let k = 0; k < rightTree.length; k++) {
          const left = leftTree[j]
          const right = rightTree[k]
          const root = new TreeNode(i)
          root.left = left
          root.right = right
          result.push(root)
        }
      }
    }
    return result
  }
}
console.log(generateTrees(3))
// @lc code=end

module.exports = { generateTrees }

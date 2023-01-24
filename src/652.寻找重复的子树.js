/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
  let memo = new Map(),
    res = []

  traverse(root)
  console.log('res', res)
  return res

  function traverse(root) {
    if (!root) {
      return '#'
    }
    const left = traverse(root.left)
    const right = traverse(root.right)

    const subTree = left + ',' + right + ',' + root.val

    const count = memo.get(subTree)
    if (count === 1) {
      res.push(root)
    }
    memo.set(subTree, (count || 0) + 1)

    return subTree
  }
}

// @lc code=end

module.exports = { findDuplicateSubtrees }

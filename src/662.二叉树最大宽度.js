/*
 * @lc app=leetcode.cn id=662 lang=javascript
 *
 * [662] 二叉树最大宽度
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
 * @return {number}
 */
// 111/114 cases passed (N/A), still cannot passed and the test case is odd
// dfs solution
var widthOfBinaryTree = function(root) {
  let res = 0
  const levelMap = {}
  traverse(root, 0, 0)
  return res

  function traverse(root, level, pos) {
    if (!root) return
    // the first node the enter current level, record its pos
    if (levelMap[level] === undefined) {
      levelMap[level] = pos
    }
    res = Math.max(res, pos - levelMap[level] + 1)
    // child index can be counted from parent index
    // [0,1,2,3,4,5,6] =>[0, 0, 1, 0, 1, 2, 3]
    traverse(root.left, level + 1, 2 * pos)
    traverse(root.right, level + 1, 2 * pos + 1)
  }
}

// const { createBTFromArray } = require('./utils/bst')
// const root = createBTFromArray([1, 2, 3, null, 5, 6, 7])
// widthOfBinaryTree(root)

// @lc code=end

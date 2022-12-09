/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
 */

const { traverse } = require('@babel/core')

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
// recursive method
// var maxDepth = function(root) {
//   if (!root) {
//     return 0
//   }
//   let subTreeDepth = 0
//   for (let index = 0; index < root.children.length; index++) {
//     const subTree = root.children[index]
//     subTreeDepth = Math.max(subTreeDepth, maxDepth(subTree))
//   }
//   return subTreeDepth + 1
// }

// iteractive method
var maxDepth = function(root) {
  let maxDepth = 0
  let curDepth = 0
  traverse(root)
  return maxDepth

  function traverse(root) {
    if (!root) {
      return
    }
    curDepth++
    maxDepth = Math.max(maxDepth, curDepth) // key step
    for (let index = 0; index < root.children.length; index++) {
      const child = root.children[index]
      traverse(child)
    }
    curDepth--
  }
}
// @lc code=end

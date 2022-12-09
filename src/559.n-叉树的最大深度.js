/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
 */

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
var maxDepth = function(root) {
  if (!root) {
    return 0
  }
  let subTreeDepth = 0
  for (let index = 0; index < root.children.length; index++) {
    const subTree = root.children[index]
    subTreeDepth = Math.max(subTreeDepth, maxDepth(subTree))
  }
  return subTreeDepth + 1
}
// @lc code=end

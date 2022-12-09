/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
  let res = []
  traverse(root)
  return res

  function traverse(root) {
    if (!root) {
      return
    }
    res.push(root.val)
    for (let index = 0; index < root.children.length; index++) {
      const child = root.children[index]
      traverse(child)
    }
  }
}
// @lc code=end

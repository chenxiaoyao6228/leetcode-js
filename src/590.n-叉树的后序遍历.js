/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N 叉树的后序遍历
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
 * @return {number[]}
 */
var postorder = function(root) {
  let res = []
  traverse(root)
  return res

  function traverse(root) {
    if (!root) return
    for (let index = 0; index < root.children.length; index++) {
      const child = root.children[index]
      traverse(child)
    }
    res.push(root.val)
  }
}
// @lc code=end

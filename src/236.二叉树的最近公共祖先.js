/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
 * ❗One thing is for sure:  p and q  are in this tree
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var lowestCommonAncestor = function(root, p, q) {
  return find(root, p.val, q.val)

  function find(root, val1, val2) {
    if (!root) return null
    // preorder, check root value first
    if (root.val === val1 || root.val === val2) return root

    const left = find(root.left, val1, val2)
    const right = find(root.right, val1, val2)

    // p and q in root
    if (left && right) return root

    // p and q not in root
    if (left === null && right === null) return null

    // if one of p and q in root, return that node
    return left ? left : right
  }
}
// @lc code=end

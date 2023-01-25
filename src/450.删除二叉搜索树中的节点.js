/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  return helper(root, key)
  function helper(root, key) {
    // base case
    if (root == null) return null

    if (root.val === key) {
      // s1: root is leaf node
      if (root.left == null && root.right == null) {
        return null // deleteNode directly
      }

      // s2: root has left or right
      if (root.left === null) {
        return root.right
      }
      if (root.right === null) {
        return root.left
      }

      // s3: root has two child nodes, now we have two choices
      // 1. find the largest node in the left 2. find the smallest node in the right
      if (root.left && root.right) {
        const minNode = getMin(root.right)
        root.right = helper(root.right, minNode.val)
        minNode.left = root.left
        minNode.right = root.right
        root = minNode
      }
    } else if (root.val < key) {
      root.right = helper(root.right, key)
    } else if (root.val > key) {
      root.left = helper(root.left, key)
    }
    return root
  }
  function getMin(root) {
    let p = root
    while (p.left) {
      p = p.left
    }
    return p
  }
}
// @lc code=end

module.exports = { deleteNode }

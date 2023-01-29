/*
 * @lc app=leetcode.cn id=872 lang=javascript
 *
 * [872] 叶子相似的树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  const arr1 = []
  collectLeaf(root1, arr1)
  const arr2 = []
  collectLeaf(root2, arr2)
  console.log('arr1, arr2', arr1, arr2)

  return isArrayEqual(arr1, arr2)

  function collectLeaf(root, arr = []) {
    if (!root) return
    if (!(root.left || root.right)) {
      arr.push(root.val)
      return
    }
    collectLeaf(root.left, arr)
    collectLeaf(root.right, arr)
  }

  function isArrayEqual(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2)
  }
}
// @lc code=end

module.exports = { leafSimilar }

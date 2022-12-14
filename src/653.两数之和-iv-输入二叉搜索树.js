/*
 * @lc app=leetcode.cn id=653 lang=javascript
 *
 * [653] 两数之和 IV - 输入二叉搜索树
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
 * @param {number} k
 * @return {boolean}
 */
// in-order traverse + two pointer
var findTarget = function(root, k) {
  const arr = traverse(root)

  let left = 0,
    right = arr.length - 1

  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum < k) left++
    else if (sum > k) right--
    else return true
  }
  return false

  function traverse(root) {
    let res = []

    if (!root) {
      return res
    }

    res = res.concat(traverse(root.left))
    res.push(root.val)
    res = res.concat(traverse(root.right))

    return res
  }
}
// @lc code=end

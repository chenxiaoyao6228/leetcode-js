/*
 * @lc app=leetcode.cn id=1373 lang=javascript
 *
 * [1373] 二叉搜索子树的最大键值和
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
 * @return {number}
 */

// res[0]: whether current is BST, 1 for true
// res[1]: leftMax
// res[2]: rightMin
// res[3]: current tree sum of all values
let maxSum = 0
var maxSumBST = function(root) {
  traverse(root)
  return maxSum

  function traverse(root) {
    if (!root) {
      return [1, Infinity, -Infinity, 0]
    }
    const left = traverse(root.left)
    const right = traverse(root.right)

    const res = new Array(4)

    if (
      left[0] === 1 &&
      right[0] == 1 &&
      root.val > left[2] &&
      root.val < right[1]
    ) {
      // current is BST
      res[0] = 1

      res[1] = Math.min(left[1], root.val)
      res[2] = Math.max(right[2], root.val)

      res[3] = left[3] + right[3] + root.val
      maxSum = Math.max(maxSum, res[3])
    } else {
      res[0] = 0
    }
    return res
  }
}
// @lc code=end

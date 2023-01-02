/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
// var levelOrder = function(root) {
//   if (!root) return []
//   root.depth = 0
//   let queue = [root]
//   let res = []
//   while (queue.length) {
//     let node = queue.shift()

//     if (!res[node.depth]) {
//       res[node.depth] = [node.val]
//     } else {
//       res[node.depth].push(node.val)
//     }

//     if (node.left) {
//       node.left.depth = node.depth + 1
//       queue.push(node.left)
//     }
//     if (node.right) {
//       node.right.depth = node.depth + 1
//       queue.push(node.right)
//     }
//   }
//   return res
// }

// solution2: not modifier original tree
// var levelOrder = function(root) {
//   if (!root) {
//     return []
//   }
//   const res = []
//   const queue = [{ node: root, level: 0 }]
//   while (queue.length) {
//     let { node, level } = queue.shift()
//     if (!res[level]) {
//       res[level] = []
//     }
//     res[level].push(node.val)

//     if (node.left) {
//       queue.push({ node: node.left, level: level + 1 })
//     }
//     if (node.right) {
//       queue.push({ node: node.right, level: level + 1 })
//     }
//   }
//   return res
// }

// solution3:
// var levelOrder = function(root) {
//   // base case
//   if (!root) {
//     return []
//   }
//   const queue = [root]
//   const res = []
//   let levelRes = []
//   while (queue.length > 0) {
//     const node = queue.shift()
//     // current node is the first node of this level
//     // or the rightest child
//     if (!queue.length) {
//       res.push(levelRes.slice(0))
//       levelRes = []
//     }
//     levelRes.push(node.val)

//     node.left && queue.push(node.left)
//     node.right && queue.push(node.right)
//   }
//   return res
// }

// solution3
var levelOrder = function(root) {
  let res = [] //结果
  if (root === null) {
    return res
  }
  let queue = [root] //遍历中用的队列
  while (queue.length) {
    let len = queue.length //一层的数据量
    let curLevel = []
    while (len > 0) {
      let node = queue.shift()
      curLevel.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
      len--
    }
    res.push(curLevel)
  }
  return res
}

// const { createBTFromArray } = require('./utils/bst')
// const root = createBTFromArray([1, 2, 3, 4, 5, 6, 7])
// levelOrder(root)

// @lc code=end

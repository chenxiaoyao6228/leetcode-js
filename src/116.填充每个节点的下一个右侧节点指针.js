/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

// solution1
// var connect = function(root) {
//   if (!root) return null
//   connectTwo(root.left, root.right)
//   return root
//   function connectTwo(node1, node2) {
//     if (!node1 || !node2) return
//     node1.next = node2

//     connectTwo(node1.left, node1.right)
//     connectTwo(node2.left, node2.right)

//     // connect two injacent node
//     connectTwo(node1.right, node2.left)
//   }
// }

// solution2: bfs
// var connect = function(root) {
//   if (!root) return null
//   const queue = [{ node: root, level: 0 }]
//   while (queue.length) {
//     const { node, level } = queue.shift()
//     // your code here
//     const peek = queue[0]
//     if (peek && peek.level === level) {
//       node.next = peek.node
//     }
//     if (node.left) {
//       queue.push({ node: node.left, level: level + 1 })
//     }
//     if (node.right) {
//       queue.push({ node: node.right, level: level + 1 })
//     }
//   }
//   return root
// }

// solution3:  bfs-v2
var connect = function(root) {
  let queue = [root]
  while (queue.length) {
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      const peek = queue[0]
      if (peek) {
        node.next = peek
      }
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  return root
}

// @lc code=end

module.exports = { connect }

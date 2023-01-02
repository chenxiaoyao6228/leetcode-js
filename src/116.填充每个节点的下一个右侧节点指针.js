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

// solution1: bfs
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

// solution2
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

// solution3
var connect = function(root) {
  if (!root) return root
  let queue = [root] // store current level
  let nextQueue = [] // store nextLevel

  while (queue.length > 0) {
    let node = queue.shift()
    node.left && nextQueue.push(node.left)
    node.right && nextQueue.push(node.right)
    if (queue.length > 0) {
      node.next = queue[0]
    } else {
      // current node is the first node of this level!
      node.next = null
      queue = nextQueue
      nextQueue = []
    }
  }

  return root
}
// @lc code=end

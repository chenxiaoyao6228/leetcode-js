const { TreeNode } = require('../data-structure/TreeNode')

function createBTFromArray(arr) {
  if (!arr || !arr.length) {
    return null
  }
  let index = 0
  const queue = []
  const len = arr.length
  const head = new TreeNode(arr[index])
  queue.push(head)

  while (index < len) {
    index++
    const parent = queue.shift()
    if (arr[index] !== null && arr[index] !== undefined) {
      const node = new TreeNode(arr[index])
      parent.left = node
      queue.push(node)
    }

    index++
    if (arr[index] !== null && arr[index] !== undefined) {
      const node = new TreeNode(arr[index])
      parent.right = node
      queue.push(node)
    }
  }
  return head
}

// const res = createBTFromArray([7, 3, 15, null, null, 9, 20])
// console.log('res', res)

module.exports = { createBTFromArray }

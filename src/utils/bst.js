const { TreeNode } = require('../data-structure/TreeNode')

function createASTFromArray(nodeList, index = 0) {
  if (index > nodeList.length - 1 || !nodeList[index]) {
    return null
  }
  const root = new TreeNode(nodeList[index])
  root.left = createASTFromArray(nodeList, 2 * index + 1)
  root.right = createASTFromArray(nodeList, 2 * index + 2)
  return root
}

// const res = createASTFromArray([7, 3, 15, null, null, 9, 20])
// console.log('res', res)

module.exports = { createASTFromArray }

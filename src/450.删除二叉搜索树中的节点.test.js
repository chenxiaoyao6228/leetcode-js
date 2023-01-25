const { deleteNode } = require('./450.删除二叉搜索树中的节点.js')
const { createBTFromArray, isSameTree } = require('./utils/bst')

test('deleteNode', () => {
  const res = deleteNode(createBTFromArray([5, 3, 6, 2, 4, null, 7]), 3)
  const expects = [
    createBTFromArray([5, 4, 6, 2, null, null, 7]),
    createBTFromArray([5, 2, 6, null, 4, null, 7])
  ]
  expect(expects.some(exp => isSameTree(exp, res))).toEqual(true)
})

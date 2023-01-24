const { buildTree } = require('./105.从前序与中序遍历序列构造二叉树.js')
const { createBTFromArray } = require('./utils/bst')
test('buildTree', () => {
  expect(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])).toEqual(
    createBTFromArray([3, 9, 20, null, null, 15, 7])
  )
})

test('buildTree', () => {
  expect(buildTree([-1], [-1])).toEqual(createBTFromArray([-1]))
})

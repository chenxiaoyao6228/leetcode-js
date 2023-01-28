const { inorderTraversal } = require('./94.二叉树的中序遍历.js')
const { createBTFromArray } = require('./utils/bst')

test('inorderTraversal', () => {
  expect(inorderTraversal(createBTFromArray([1, null, 2, 3]))).toEqual([
    1,
    3,
    2
  ])
})

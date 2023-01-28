const { preorderTraversal } = require('./144.二叉树的前序遍历.js')
const { createBTFromArray } = require('./utils/bst')

test('preorderTraversal', () => {
  expect(preorderTraversal(createBTFromArray([1, null, 2, 3]))).toEqual([
    1,
    2,
    3
  ])
})

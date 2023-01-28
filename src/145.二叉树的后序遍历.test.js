const { postorderTraversal } = require('./145.二叉树的后序遍历.js')
const { createBTFromArray } = require('./utils/bst')

test('postorderTraversal', () => {
  expect(postorderTraversal(createBTFromArray([1, null, 2, 3]))).toEqual([
    3,
    2,
    1
  ])
})

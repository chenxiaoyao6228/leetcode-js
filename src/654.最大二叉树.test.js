const { constructMaximumBinaryTree } = require('./654.最大二叉树.js')
const { createBTFromArray } = require('./utils/bst')
test('constructMaximumBinaryTree', () => {
  expect(constructMaximumBinaryTree([3, 2, 1, 6, 0, 5])).toEqual(
    createBTFromArray([6, 3, 5, null, 2, 0, null, null, 1])
  )
})

test('constructMaximumBinaryTree', () => {
  expect(constructMaximumBinaryTree([3, 2, 1])).toEqual(
    createBTFromArray([3, null, 2, null, 1])
  )
})

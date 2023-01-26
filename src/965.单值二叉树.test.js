const { isUnivalTree } = require('./965.单值二叉树.js')
const { createBTFromArray } = require('./utils/bst')

test('isUnivalTree', () => {
  expect(isUnivalTree(createBTFromArray([1, 1, 1, 1, 1, null, 1]))).toEqual(
    true
  )
})

test('isUnivalTree', () => {
  expect(isUnivalTree(createBTFromArray[[2, 2, 2, 5, 2]])).toEqual(false)
})

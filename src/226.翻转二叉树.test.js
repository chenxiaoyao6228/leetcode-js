const { invertTree } = require('./226.翻转二叉树.js')
const { createBTFromArray } = require('./utils/bst')

test('invertTree', () => {
  expect(invertTree(createBTFromArray([4, 2, 7, 1, 3, 6, 9]))).toEqual(
    createBTFromArray([4, 7, 2, 9, 6, 3, 1])
  )
})
test('invertTree2', () => {
  expect(invertTree(createBTFromArray([2, 1, 3]))).toEqual(
    createBTFromArray([2, 3, 1])
  )
})
test('invertTree3', () => {
  expect(invertTree(createBTFromArray([]))).toEqual(createBTFromArray([]))
})

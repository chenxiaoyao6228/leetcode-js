const {
  constructFromPrePost
} = require('./889.根据前序和后序遍历构造二叉树.js')
const { createBTFromArray } = require('./utils/bst')

test('constructFromPrePost', () => {
  expect(
    constructFromPrePost([1, 2, 4, 5, 3, 6, 7], [4, 5, 2, 6, 7, 3, 1])
  ).toEqual(createBTFromArray([1, 2, 3, 4, 5, 6, 7]))
})

test('constructFromPrePost', () => {
  expect(constructFromPrePost([-1], [-1])).toEqual(createBTFromArray(-1))
})

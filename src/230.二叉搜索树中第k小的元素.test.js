const { kthSmallest } = require('./230.二叉搜索树中第k小的元素.js')
const { createBTFromArray } = require('./utils/bst')
test('kthSmallest', () => {
  const root = createBTFromArray([3, 1, 4, null, 2])
  expect(kthSmallest(root, 1)).toEqual(1)
})

test('kthSmallest', () => {
  const root = createBTFromArray([5, 3, 6, 2, 4, null, null, 1])
  expect(kthSmallest(root, 3)).toEqual(3)
})

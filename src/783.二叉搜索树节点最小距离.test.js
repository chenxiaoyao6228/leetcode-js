const { minDiffInBST } = require('./783.二叉搜索树节点最小距离.js')
const { createBTFromArray } = require('./utils/bst')

test('minDiffInBST', () => {
  expect(minDiffInBST(createBTFromArray([4, 2, 6, 1, 3]))).toEqual(1)
})

test('minDiffInBST', () => {
  expect(
    minDiffInBST(createBTFromArray([1, 0, 48, null, null, 12, 49]))
  ).toEqual(1)
})

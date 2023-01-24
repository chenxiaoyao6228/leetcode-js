const { insertIntoBST } = require('./701.二叉搜索树中的插入操作.js')
const { createBTFromArray } = require('./utils/bst')

test('insertIntoBST', () => {
  expect(insertIntoBST(createBTFromArray([4, 2, 7, 1, 3]), 5)).toEqual(
    createBTFromArray([4, 2, 7, 1, 3, 5])
  )
})

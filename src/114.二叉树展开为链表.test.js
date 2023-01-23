const { flatten } = require('./114.二叉树展开为链表.js')
const { createBTFromArray } = require('./utils/bst')

test('flatten', () => {
  let root = createBTFromArray([1, 2, 5, 3, 4, null, 6])
  flatten(root)
  expect(root).toEqual(
    createBTFromArray([1, null, 2, null, 3, null, 4, null, 5, null, 6])
  )
})

const { buildTree } = require('./106.从中序与后序遍历序列构造二叉树.js')
const { createBTFromArray } = require('./utils/bst')

test('buildTree', () => {
  console.log(
    'JSON.stringify(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])',
    JSON.stringify(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]))
  )
  const res = {
    val: 9,
    left: null,
    right: {
      val: 3,
      left: {
        val: 15,
        left: null,
        right: { val: 20, left: null, right: null }
      },
      right: null
    }
  }
  expect(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])).toEqual(
    createBTFromArray([3, 9, 20, null, null, 15, 7])
  )
})

test('buildTree', () => {
  expect(buildTree([-1], [-1])).toEqual(createBTFromArray([-1]))
})

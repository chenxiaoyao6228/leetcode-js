const { bstToGst } = require('./1038.从二叉搜索树到更大和树.js')
const { createBTFromArray } = require('./utils/bst')

test('bstToGst', () => {
  expect(
    bstToGst(
      createBTFromArray([
        4,
        1,
        6,
        0,
        2,
        5,
        7,
        null,
        null,
        null,
        3,
        null,
        null,
        null,
        8
      ])
    )
  ).toEqual(
    createBTFromArray([
      30,
      36,
      21,
      36,
      35,
      26,
      15,
      null,
      null,
      null,
      33,
      null,
      null,
      null,
      8
    ])
  )
})

test('bstToGst', () => {
  expect(bstToGst(createBTFromArray([0, null, 1]))).toEqual(
    createBTFromArray([1, null, 1])
  )
})

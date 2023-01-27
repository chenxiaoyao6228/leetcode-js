const { allPathsSourceTarget } = require('./797.所有可能的路径.js')
const { createBTFromArray } = require('./utils/bst')

function isMatrixEqual(m1, m2) {
  return JSON.stringify(m1) === JSON.stringify(m2)
}

test('allPathsSourceTarget', () => {
  const res = allPathsSourceTarget([[1, 2], [3], [3], []])
  const expects = [
    [
      [0, 1, 3],
      [0, 2, 3]
    ],
    [
      [0, 1, 3],
      [0, 2, 3]
    ]
  ]
  expect(expects.some(exp => isMatrixEqual(exp, res))).toEqual(true)
})

// test.skip('allPathsSourceTarget', () => {
//   expect(allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []])).toEqual([
//     [0, 4],
//     [0, 3, 4],
//     [0, 1, 3, 4],
//     [0, 1, 2, 3, 4],
//     [0, 1, 4]
//   ])
// })

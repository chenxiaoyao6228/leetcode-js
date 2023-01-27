const { findOrder } = require('./210.课程表-ii.js')

const isEqual = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2)
test('findOrder1', () => {
  expect(isEqual(findOrder(2, [[1, 0]]), [0, 1])).toEqual(true)
})

test('findOrder2', () => {
  expect(isEqual(findOrder(1, []), [0])).toEqual(true)
})

test('findOrder3', () => {
  const expects = [
    [0, 2, 1, 3],
    [0, 2, 1, 3]
  ]
  const res = findOrder(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2]
  ])
  console.log('res', res)
  expect(expects.some(exp => isEqual(exp, res))).toEqual(true)
})

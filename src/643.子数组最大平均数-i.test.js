const { findMaxAverage } = require('./643.子数组最大平均数-i.js')

test('findMaxAverage1', () => {
  expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toEqual(12.75)
})

test('findMaxAverage2', () => {
  expect(findMaxAverage([5], 1)).toEqual(5)
})
test('findMaxAverage3', () => {
  expect(findMaxAverage([-1], 1)).toEqual(-1)
})

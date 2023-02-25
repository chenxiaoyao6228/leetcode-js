const { maximumUniqueSubarray } = require('./1695.删除子数组的最大得分.js')

test('maximumUniqueSubarray1', () => {
  expect(maximumUniqueSubarray([4, 2, 4, 5, 6])).toEqual(17)
})

test('maximumUniqueSubarray2', () => {
  expect(maximumUniqueSubarray([5, 2, 1, 2, 5, 2, 1, 2, 5])).toEqual(8)
})

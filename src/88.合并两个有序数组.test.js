const { merge } = require('./88.合并两个有序数组.js')

test('merge1', () => {
  expect(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).toEqual([1, 2, 2, 3, 5, 6])
})
test('merge2', () => {
  expect(merge([1], 1, [], 0)).toEqual([1])
})

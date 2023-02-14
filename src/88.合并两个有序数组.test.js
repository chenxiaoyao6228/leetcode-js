const { merge } = require('./88.合并两个有序数组.js')

test.skip('merge1', () => {
  let nums1 = [1, 2, 3, 0, 0, 0]
  merge(nums1, 3, [2, 5, 6], 3)
  expect(nums1).toEqual([1, 2, 2, 3, 5, 6])
})
test.skip('merge2', () => {
  let nums1 = [1]
  merge(nums1, 1, [], 0)
  expect(nums1).toEqual([1])
})

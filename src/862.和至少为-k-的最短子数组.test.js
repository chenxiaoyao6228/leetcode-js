const { shortestSubarray } = require('./862.和至少为-k-的最短子数组.js')

test('shortestSubarray1', () => {
  expect(shortestSubarray([1], 1)).toEqual(1)
})

test('shortestSubarray2', () => {
  expect(shortestSubarray([1, 2], 4)).toEqual(-1)
})
test('shortestSubarray3', () => {
  expect(shortestSubarray([2, -1, 2], 3)).toEqual(3)
})

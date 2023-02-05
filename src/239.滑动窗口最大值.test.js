const { maxSlidingWindow } = require('./239.滑动窗口最大值.js')
const { createBTFromArray } = require('./utils/bst')

test('maxSlidingWindow1', () => {
  expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([
    3,
    3,
    5,
    5,
    6,
    7
  ])
})

test('maxSlidingWindow2', () => {
  expect(maxSlidingWindow([1])).toEqual([1])
})

// test('maxSlidingWindow3', () => {
//   expect(maxSlidingWindow()).toEqual()
// })

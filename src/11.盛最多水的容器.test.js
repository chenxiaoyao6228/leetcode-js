const { maxArea } = require('./11.盛最多水的容器.js')

test('maxArea1', () => {
  expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49)
})

test('maxArea2', () => {
  expect(maxArea([])).toEqual(0)
})

test('maxArea3', () => {
  expect(maxArea([1, 8, 100, 2, 100, 4, 8, 3, 7])).toEqual(200)
})

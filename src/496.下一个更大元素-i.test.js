const { nextGreaterElement } = require('./496.下一个更大元素-i.js')
const { createBTFromArray } = require('./utils/bst')

test('nextGreaterElement1', () => {
  expect(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])).toEqual([-1, 3, -1])
})

test('nextGreaterElement2', () => {
  expect(nextGreaterElement([2, 4], [1, 2, 3, 4])).toEqual([3, -1])
})

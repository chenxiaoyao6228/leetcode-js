const { nextGreaterElements } = require('./503.下一个更大元素-ii.js')
const { createBTFromArray } = require('./utils/bst')

test('nextGreaterElements1', () => {
  expect(nextGreaterElements([1, 2, 1])).toEqual([2, -1, 2])
})

test('nextGreaterElements2', () => {
  expect(nextGreaterElements([1, 2, 3, 4, 3])).toEqual([2, 3, 4, -1, 4])
})

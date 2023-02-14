const { twoSum } = require('./167.两数之和-ii-输入有序数组.js')

test('twoSum', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2])
  expect(twoSum([2, 7, 11, 15, 17, 19, 22, 30], 45)).toEqual([4, 8])
  expect(() => {
    twoSum([2, 7, 11, 15, 17, 19, 22, 30], 48)
  }).toThrow('invalid input with no solutions')
})

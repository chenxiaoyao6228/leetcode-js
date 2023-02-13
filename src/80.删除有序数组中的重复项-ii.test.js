const { removeDuplicates } = require('./80.删除有序数组中的重复项-ii.js')

test('removeDuplicates1', () => {
  expect(removeDuplicates([1, 1, 1, 2, 2, 3])).toEqual(5)
})

test('removeDuplicates2', () => {
  expect(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3])).toEqual(7)
})

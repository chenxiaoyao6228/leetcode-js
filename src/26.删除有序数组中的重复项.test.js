const { removeDuplicates } = require('./26.删除有序数组中的重复项.js')

test('removeDuplicates1', () => {
  expect(removeDuplicates([1, 1, 2])).toEqual(2)
})

test('removeDuplicates2', () => {
  expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toEqual(5)
})

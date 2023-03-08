const { deleteDuplicates } = require('./83.删除排序链表中的重复元素.js')
const { createLinkedListFromArr } = require('./utils/linked-list')

test('deleteDuplicates1', () => {
  expect(deleteDuplicates(createLinkedListFromArr([1, 1, 2]))).toEqual(
    createLinkedListFromArr([1, 2])
  )
})

test('deleteDuplicates2', () => {
  expect(deleteDuplicates(createLinkedListFromArr([1, 1, 2, 3, 3]))).toEqual(
    createLinkedListFromArr([1, 2, 3])
  )
})

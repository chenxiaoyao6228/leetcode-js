const { removeNthFromEnd } = require('./19.删除链表的倒数第-n-个结点.js')
const { createLinkedListFromArr } = require('./utils/linked-list')

test('removeNthFromEnd1', () => {
  expect(removeNthFromEnd(createLinkedListFromArr([1, 2, 3, 4, 5]), 2)).toEqual(
    createLinkedListFromArr([1, 2, 3, 5])
  )
})

test('removeNthFromEnd2', () => {
  expect(removeNthFromEnd(createLinkedListFromArr([1]), 1)).toEqual(null)
})
test('removeNthFromEnd3', () => {
  expect(removeNthFromEnd(createLinkedListFromArr([1, 2]), 1)).toEqual(
    createLinkedListFromArr([1])
  )
})

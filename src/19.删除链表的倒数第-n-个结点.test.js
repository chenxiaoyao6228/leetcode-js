const { removeNthFromEnd } = require('./19.删除链表的倒数第-n-个结点.js')
const { createList } = require('./utils/linked-list')

test('removeNthFromEnd1', () => {
  expect(removeNthFromEnd(createList([1, 2, 3, 4, 5]), 2)).toEqual(
    createList([1, 2, 3, 5])
  )
})

test('removeNthFromEnd2', () => {
  expect(removeNthFromEnd(createList([1]), 1)).toEqual(createList([]))
})
test('removeNthFromEnd3', () => {
  expect(removeNthFromEnd(createList([1, 2]), 1)).toEqual(createList([1]))
})

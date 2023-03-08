const { middleNode } = require('./876.链表的中间结点.js')
const { createLinkedListFromArr } = require('./utils/linked-list')

test('middleNode1', () => {
  expect(middleNode(createLinkedListFromArr([1, 2, 3, 4, 5]))).toEqual(
    createLinkedListFromArr([3, 4, 5])
  )
})

test('middleNode2', () => {
  expect(middleNode(createLinkedListFromArr([1, 2, 3, 4, 5, 6]))).toEqual(
    createLinkedListFromArr([4, 5, 6])
  )
})

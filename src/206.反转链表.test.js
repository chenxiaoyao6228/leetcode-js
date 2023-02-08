const { reverseList } = require('./206.反转链表.js')
const { createBTFromArray } = require('./utils/bst')
const { createLinkedListFromArr } = require('./utils/linked-list.js')

test('reverseList1', () => {
  const origin = createLinkedListFromArr([1, 2, 3, 4, 5])
  const expected = createLinkedListFromArr([5, 4, 3, 2, 1])
  expect(reverseList(origin)).toEqual(expected)
})

test('reverseList2', () => {
  const origin = createLinkedListFromArr([1, 2])
  const expected = createLinkedListFromArr([2, 1])
  expect(reverseList(origin)).toEqual(expected)
})

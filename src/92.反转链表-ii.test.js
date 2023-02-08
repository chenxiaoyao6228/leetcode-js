const { reverseBetween } = require('./92.反转链表-ii.js')
const { createBTFromArray } = require('./utils/bst')
const { createList, createLinkedListFromArr } = require('./utils/linked-list')

test('reverseBetween1', () => {
  const origin = createLinkedListFromArr([1, 2, 3, 4, 5])
  const res = reverseBetween(origin, 2, 4)
  const expected = createLinkedListFromArr([1, 4, 3, 2, 5])
  expect(res).toEqual(expected)
})

test('reverseBetween2', () => {
  const origin = createLinkedListFromArr([5])
  const expected = createLinkedListFromArr([5])
  expect(reverseBetween(origin, 1, 1)).toEqual(expected)
})

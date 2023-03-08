const { partition } = require('./86.分隔链表.js')
const { createLinkedListFromArr } = require('./utils/linked-list')

test('partition1', () => {
  expect(partition(createLinkedListFromArr([1, 4, 3, 2, 5, 2]), 3)).toEqual(
    createLinkedListFromArr([1, 2, 2, 4, 3, 5])
  )
})

test('partition2', () => {
  expect(partition(createLinkedListFromArr([2, 1]), 2)).toEqual(
    createLinkedListFromArr([1, 2])
  )
})

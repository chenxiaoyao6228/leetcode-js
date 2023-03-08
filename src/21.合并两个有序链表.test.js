const { mergeTwoLists } = require('./21.合并两个有序链表.js')
const { createBTFromArray } = require('./utils/bst')
const { createLinkedListFromArr } = require('./utils/linked-list')

test('mergeTwoLists1', () => {
  expect(
    mergeTwoLists(
      createLinkedListFromArr([1, 2, 4]),
      createLinkedListFromArr([1, 3, 4])
    )
  ).toEqual(createLinkedListFromArr([1, 1, 2, 3, 4, 4]))
})

test('mergeTwoLists2', () => {
  expect(mergeTwoLists(null, null)).toEqual(null)
})
test('mergeTwoLists3', () => {
  expect(mergeTwoLists(null, createLinkedListFromArr([0]))).toEqual(
    createLinkedListFromArr([0])
  )
})

const { mergeKLists } = require('./23.合并k个升序链表.js')
const { createLinkedListFromArr } = require('./utils/linked-list')

// test('mergeKLists1', () => {
//   const l1 = createLinkedListFromArr([1, 4, 5])
//   const l2 = createLinkedListFromArr([2, 3, 9])
//   const l3 = createLinkedListFromArr([6, 7, 8])
//   const expected = createLinkedListFromArr([1, 2, 3, 4, 5, 6, 7, 8, 9])

//   const res = mergeKLists([l1, l2, l3])
//   console.log('res', JSON.stringify(res))
//   expect(res).toEqual(expected)
// })
// test('mergeKLists1', () => {
//   const l1 = createLinkedListFromArr([1, 4, 5])
//   const l2 = createLinkedListFromArr([1, 3, 4])
//   const l3 = createLinkedListFromArr([2, 6])
//   const expected = createLinkedListFromArr([1, 1, 2, 3, 4, 4, 5, 6])
//   const res = mergeKLists([l1, l2, l3])
//   console.log('res', JSON.stringify(res))
//   expect(res).toEqual(expected)
// })

// test('mergeKLists2', () => {
//   expect(mergeKLists(createBTFromArray([]))).toEqual(createBTFromArray([]))
// })
// test('mergeKLists3', () => {
//   expect(mergeKLists([[]])).toEqual(createBTFromArray([]))
// })

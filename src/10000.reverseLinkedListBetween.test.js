const { reverseBetween } = require('./10000.reverseLinkedListBetween.js')
const { createLinkedListFromArr } = require('./utils/linked-list')

test('reverseBetween', () => {
  expect(
    reverseBetween(createLinkedListFromArr([1, 2, 3, 4, 5, 6]), 3, 5)
  ).toEqual(createLinkedListFromArr([1, 2, 5, 4, 3, 6]))
})
test('reverseBetween', () => {
  expect(reverseBetween(null, 3, 5)).toEqual(null)
})

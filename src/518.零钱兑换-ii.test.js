const { change } = require('./518.零钱兑换-ii.js')
const { createBTFromArray } = require('./utils/bst')

test('change', () => {
  expect(change(5, [1, 2, 5])).toEqual(4)
})

test('change2', () => {
  expect(change(3, [2])).toEqual(0)
})
test('change2', () => {
  expect(change(10, [10])).toEqual(1)
})

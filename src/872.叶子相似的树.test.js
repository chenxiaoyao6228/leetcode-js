const { leafSimilar } = require('./872.叶子相似的树.js')
const { createBTFromArray } = require('./utils/bst')

test('leafSimilar', () => {
  expect(
    leafSimilar(
      createBTFromArray([3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]),
      createBTFromArray([
        3,
        5,
        1,
        6,
        7,
        4,
        2,
        null,
        null,
        null,
        null,
        null,
        null,
        9,
        8
      ])
    )
  ).toEqual(true)
})

test('leafSimilar', () => {
  expect(
    leafSimilar(createBTFromArray([1, 2, 3]), createBTFromArray([1, 3, 2]))
  ).toEqual(false)
})
test('leafSimilar', () => {
  expect(
    leafSimilar(createBTFromArray([1, 2, 3]), createBTFromArray([1, 3, 2]))
  ).toEqual(false)
})
test('leafSimilar', () => {
  expect(
    leafSimilar(createBTFromArray([1, 2]), createBTFromArray([2, 2]))
  ).toEqual(true)
})

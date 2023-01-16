const { combinationSum3 } = require('./216.组合总和-iii.js')

test('combinationSum3', () => {
  expect(combinationSum3(3, 7)).toEqual([[1, 2, 4]])
})

test('combinationSum3', () => {
  expect(combinationSum3(3, 9)).toEqual([
    [1, 2, 6],
    [1, 3, 5],
    [2, 3, 4]
  ])
})
test('combinationSum3', () => {
  expect(combinationSum3(4, 1)).toEqual([])
})

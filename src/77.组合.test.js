const { combine } = require('./77.组合.js')

test.skip('combine', () => {
  expect(combine(4, 2)).toEqual([
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [3, 4]
  ])
})

test.skip('combine', () => {
  expect(combine(1, 1)).toEqual([[1]])
})

const { minPathSum } = require('./64.最小路径和.js')

test('minPathSum', () => {
  expect(
    minPathSum([
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1]
    ])
  ).toEqual(7)
  expect(
    minPathSum([
      [1, 2, 3],
      [4, 5, 6]
    ])
  ).toEqual(12)
})

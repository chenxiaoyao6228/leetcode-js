const { minFallingPathSum } = require('./931.下降路径最小和.js')

test('minFallingPathSum', () => {
  expect(
    minFallingPathSum([
      [2, 1, 3],
      [6, 5, 4],
      [7, 8, 9]
    ])
  ).toEqual(13)
  expect(
    minFallingPathSum([
      [-19, 57],
      [-40, -5]
    ])
  ).toEqual(-59)
})

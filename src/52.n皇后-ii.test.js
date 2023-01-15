const { totalNQueens } = require('./52.n皇后-ii.js')

test('totalNQueens', () => {
  expect(totalNQueens(4)).toEqual(2)
})

test('totalNQueens', () => {
  expect(totalNQueens(1)).toEqual(1)
})

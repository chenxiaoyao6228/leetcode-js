/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

// path: rows that small then 'row'
// choice: which col to put on row
// end condition: 'row' > n
var totalNQueens = function(n) {
  let res = 0
  const board = new Array(n).fill(0).map(() => new Array(n).fill('.'))
  backtrack(board, 0)
  return res

  function backtrack(board, row) {
    if (row === board.length) {
      res++
      return
    }
    const n = board.length
    for (let col = 0; col < n; col++) {
      if (!isValid(board, row, col)) {
        continue
      }
      board[row][col] = 'Q'
      backtrack(board, row + 1)
      board[row][col] = '.'
    }
  }
  function isValid(board, row, col) {
    for (let i = row; i >= 0; i--) {
      if (board[i][col] === 'Q') {
        return false
      }
    }
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') {
        return false
      }
    }

    for (let i = row - 1, j = col + 1; i >= 0 && j <= n - 1; i--, j++) {
      if (board[i][j] === 'Q') {
        return false
      }
    }

    return true
  }
}

// @lc code=end

module.exports = { totalNQueens }

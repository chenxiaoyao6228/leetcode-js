/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */

var solveNQueens = function(n) {
  const res = []
  const board = new Array(n).fill([]).map(item => new Array(n).fill('.'))
  backtrack(board, 0)
  return res

  function backtrack(board, row) {
    if (row === board.length) {
      // remember to return the copy of the board
      res.push(board.map(row => row.join('')))
      return
    }
    const n = board[row].length
    for (let col = 0; col < n; col++) {
      // pick out invalid choice
      if (!isValid(board, row, col)) {
        continue
      }
      // make choice
      board[row][col] = 'Q'
      // backtrack
      backtrack(board, row + 1)
      // undo choice
      board[row][col] = '.'
    }
  }

  // check if can we place the queue at board[row][col]
  // try to draw a 4 x 4 board on paper and you will see
  function isValid(board, row, col) {
    let n = board.length
    // check current column
    for (let i = row - 1; i >= 0; i--) {
      if (board[i][col] === 'Q') {
        return false
      }
    }
    // check leftup
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') {
        return false
      }
    }
    // check rightup
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === 'Q') {
        return false
      }
    }
    return true
  }
}

// @lc code=end

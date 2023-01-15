/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// leetcode seems to failed at on test case but actually passed locally
var exist = function(board, word) {
  const visited = {}
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (dfs(i, j, 0)) {
        return true
      }
    }
  }
  return false // not found in any path

  function dfs(i, j, w) {
    const key = i + '-' + j
    if (visited[key]) {
      return false
    }

    if (w === word.length) {
      return true
    }

    if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) {
      return false
    }

    let found = false
    if (word[w] === board[i][j]) {
      visited[key] = true
      // if any path is found, then return true
      found =
        dfs(i - 1, j, w + 1) ||
        dfs(i + 1, j, w + 1) ||
        dfs(i, j - 1, w + 1) ||
        dfs(i, j + 1, w + 1)
      visited[key] = false
    }
    return found
  }
}
// @lc code=end

module.exports = { exist }

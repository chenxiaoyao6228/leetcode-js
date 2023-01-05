/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let res = 0
  let m = grid.length,
    n = grid[0].length
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        res++
        // floodfill all neigbors since all adjacent land should count as one
        dfs(grid, i, j)
      }
    }
  }
  return res

  function dfs(grid, i, j) {
    if (i < 0 || i >= m || j < 0 || j >= n) {
      return
    }
    // floodfill
    if (grid[i][j] === '0') {
      return
    }
    grid[i][j] = '0'

    dfs(grid, i - 1, j)
    dfs(grid, i + 1, j)
    dfs(grid, i, j - 1)
    dfs(grid, i, j + 1)
  }
}
// numIslands([
//   ['1', '1', '1', '1', '0'],
//   ['1', '1', '0', '1', '0'],
//   ['1', '1', '0', '0', '0'],
//   ['0', '0', '0', '0', '0']
// ])
// @lc code=end

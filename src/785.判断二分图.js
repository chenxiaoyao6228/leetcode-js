/*
 * @lc app=leetcode.cn id=785 lang=javascript
 *
 * [785] 判断二分图
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
  let isOK = true
  const n = graph.length
  const colorArrofBoolean = new Array(n).fill(false)
  const vistedArrOfBoolean = new Array(n).fill(false)
  // 图不一定是联通的
  for (let i = 0; i < n; i++) {
    if (!vistedArrOfBoolean[i]) {
      traverse(graph, i)
    }
  }
  return isOK

  function traverse(graph, v) {
    if (!isOK) {
      return
    }
    vistedArrOfBoolean[v] = true
    for (let j = 0; j < graph[v].length; j++) {
      const w = graph[v][j]
      if (!vistedArrOfBoolean[w]) {
        colorArrofBoolean[w] = !colorArrofBoolean[v]
        traverse(graph, w)
      } else {
        if (colorArrofBoolean[w] === colorArrofBoolean[v]) {
          isOK = false
        }
      }
    }
  }
}
// isBipartite([
//   [1, 2, 3],
//   [0, 2],
//   [0, 1, 3],
//   [0, 2]
// ])
// @lc code=end

/*
 * @lc app=leetcode.cn id=886 lang=javascript
 *
 * [886] 可能的二分法
 */

const { traverse } = require('@babel/core')

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(n, dislikes) {
  let isOk = true
  const visited = []
  const colors = []
  const graph = buildGraph(n, dislikes)

  // index start from 1
  for (let i = 1; i < graph.length; i++) {
    if (!visited[i]) {
      traverse(graph, i)
    }
  }

  return isOk

  function buildGraph(n, delikes) {
    // graph count from 1...n
    const graph = new Array(n + 1)
    // index start from 1
    for (let i = 1; i < n + 1; i++) {
      graph[i] = []
    }
    dislikes.forEach(edge => {
      const v = edge[0]
      const w = edge[1]
      graph[v].push(w)
      graph[w].push(v)
    })
    return graph
  }

  function traverse(graph, i) {
    if (!isOk) {
      return
    }
    for (let j = 0; j < graph[i].length; j++) {
      const w = graph[i][j]
      if (!visited[w]) {
        colors[w] = !colors[i]
        visited[w] = true
        traverse(graph, w)
      } else {
        if (colors[w] === colors[i]) {
          isOk = false
        }
      }
    }
  }
}
// possibleBipartition(4, [
//   [1, 2],
//   [1, 3],
//   [2, 4]
// ])
// @lc code=end

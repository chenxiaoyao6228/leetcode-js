/*
 * @lc app=leetcode.cn id=797 lang=javascript
 *
 * [797] 所有可能的路径
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
const res = []
var allPathsSourceTarget = function(graph) {
  const path = []
  traverse(graph, 0, path)
  return res

  function traverse(graph, s, path) {
    path.push(s)
    if (s === graph.length - 1) {
      res.push(path.slice(0))
    }
    graph[s].forEach(v => {
      traverse(graph, v, path)
    })
    path.pop()
  }
}
// @lc code=end

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
var allPathsSourceTarget = function(graph) {
  let res = []
  const path = []
  path.push(0)
  traverse(graph, 0)
  return res

  function traverse(graph, v) {
    if (v === graph.length - 1) {
      res.push(path.slice())
      return
    }
    const neighbors = graph[v]
    neighbors.forEach(neighbor => {
      path.push(neighbor)
      traverse(graph, neighbor)
      path.pop()
    })
  }
}
// @lc code=end

module.exports = { allPathsSourceTarget }

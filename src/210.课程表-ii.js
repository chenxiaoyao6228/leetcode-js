/*
 * @lc app=leetcode.cn id=210 lang=javascript
 *
 * [210] 课程表 II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  const graph = buildGraph(numCourses, prerequisites)
  let hasCycle = false
  const postOrder = []
  const onPath = []
  const visited = []
  for (let i = 0; i < numCourses; i++) {
    traverse(graph, i)
  }
  if (hasCycle) {
    return []
  }
  postOrder.reverse()
  return postOrder

  function traverse(graph, v) {
    if (onPath[v]) {
      hasCycle = true
    }
    if (visited[v] || hasCycle) {
      return
    }
    onPath[v] = true
    visited[v] = true
    const neighbors = graph[v]
    neighbors.forEach(neighbor => {
      traverse(graph, neighbor)
    })
    postOrder.push(v)
    onPath[v] = false
  }

  function buildGraph(numCourses, prerequisites) {
    const graph = new Array(numCourses)
      .fill(0)
      .map(item => new Array().fill([]))
    prerequisites.forEach(prereq => {
      const from = prereq[1]
      const to = prereq[0]
      graph[from].push(to)
    })
    // console.log('graph', graph)
    return graph
  }
}
// @lc code=end

module.exports = { findOrder }

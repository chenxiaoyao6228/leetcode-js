/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

const { map } = require('async')

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// tips: use directed graph to solve
var canFinish = function(numCourses, prerequisites) {
  const graph = buildGraph(numCourses, prerequisites)
  let hasCycle = false
  const visited = []
  const onPath = []
  // has no single start point
  for (let i = 0; i < numCourses; i++) {
    traverse(graph, i)
  }
  return !hasCycle

  function traverse(graph, start) {
    if (onPath[start]) {
      hasCycle = true
    }
    if (visited[start] || hasCycle) {
      return
    }
    onPath[start] = true
    visited[start] = true
    const neighbors = graph[start]
    neighbors.forEach(neighbor => {
      traverse(graph, neighbor)
    })
    onPath[start] = false
    visited[start] = false
  }

  function buildGraph(numCourses, prerequisites) {
    const graph = new Array(numCourses).fill(0).map(c => new Array().fill([]))
    prerequisites.forEach(prereq => {
      const from = prereq[0]
      const to = prereq[1]
      graph[from].push(to)
    })
    return graph
  }
}
// @lc code=end

module.exports = { canFinish }

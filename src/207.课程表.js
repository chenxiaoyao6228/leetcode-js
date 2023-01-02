/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// tips: use directed graph to solve
var canFinish = function(numCourses, prerequisites) {
  const graph = buildGraph(numCourses, prerequisites)
  // console.log('graph', graph)
  const visitedArrOfBoolean = new Array(numCourses).fill(false)
  const onPathArrayOfBoolean = new Array(numCourses).fill(false)
  let hasCycle = false
  for (let i = 0; i < numCourses; i++) {
    traverse(graph, i)
  }
  return !hasCycle

  function traverse(graph, i) {
    if (onPathArrayOfBoolean[i]) {
      hasCycle = true
    }
    if (visitedArrOfBoolean[i] || hasCycle) {
      return
    }
    // preorder code position
    visitedArrOfBoolean[i] = true
    onPathArrayOfBoolean[i] = true
    graph[i].forEach(g => {
      // traverse neighbor
      traverse(graph, g)
    })
    // postorder code position
    onPathArrayOfBoolean[i] = false
  }

  function buildGraph(numCourses, prerequisites) {
    const graph = []
    for (let i = 0; i < numCourses; i++) {
      graph[i] = []
    }
    for (let j = 0; j < prerequisites.length; j++) {
      const p = prerequisites[j]
      const from = p[1],
        to = p[0]

      graph[from].push(to)
    }
    return graph
  }
}

// canFinish(2, [
//   [1, 0],
//   [0, 1]
// ])
// @lc code=end

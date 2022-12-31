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
// solution1: dfs
// var isBipartite2 = function(graph) {
//   let isOK = true
//   const n = graph.length
//   const colorArrofBoolean = new Array(n).fill(false)
//   const vistedArrOfBoolean = new Array(n).fill(false)
//   // 图不一定是联通的
//   for (let i = 0; i < n; i++) {
//     if (!vistedArrOfBoolean[i]) {
//       traverse(graph, i)
//     }
//   }
//   return isOK

//   function traverse(graph, v) {
//     if (!isOK) {
//       return
//     }
//     vistedArrOfBoolean[v] = true
//     for (let j = 0; j < graph[v].length; j++) {
//       const w = graph[v][j]
//       if (!vistedArrOfBoolean[w]) {
//         colorArrofBoolean[w] = !colorArrofBoolean[v]
//         traverse(graph, w)
//       } else {
//         if (colorArrofBoolean[w] === colorArrofBoolean[v]) {
//           isOK = false
//         }
//       }
//     }
//   }
// }

// solution2: bfs
var isBipartite = function(graph) {
  let isOk = true
  const n = graph.length
  const colorArrOfBoolean = new Array(n).fill(false)
  const visitedArrOfBoolean = new Array(n).fill(false)
  for (let i = 0; i < n; i++) {
    if (!visitedArrOfBoolean[i]) {
      bfs(graph, i)
    }
  }
  return isOk

  function bfs(graph, start) {
    const queue = [start]
    visitedArrOfBoolean[start] = true
    while (queue.length && isOk) {
      const v = queue.shift()
      for (let i = 0; i < graph[v].length; i++) {
        const w = graph[v][i]
        if (!visitedArrOfBoolean[w]) {
          colorArrOfBoolean[w] = !colorArrOfBoolean[v]
          visitedArrOfBoolean[w] = true
          queue.push(w)
        } else {
          if (colorArrOfBoolean[v] === colorArrOfBoolean[w]) {
            isOk = false
          }
        }
      }
    }
  }
}

// isBipartite([
//   [1, 3],
//   [0, 2],
//   [1, 3],
//   [0, 2]
// ])
// @lc code=end

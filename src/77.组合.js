/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

const { tryEach } = require('async')

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const res = []
  const track = []
  backtrack(n, 1, k)
  return res

  // use start index to avoid duplicate index value
  function backtrack(n, start, k) {
    // base case
    if (k === track.length) {
      res.push(track.slice(0))
      return
    }
    for (let i = start; i <= n; i++) {
      track.push(i)
      backtrack(n, i + 1, k)
      track.pop()
    }
  }
}
// @lc code=end

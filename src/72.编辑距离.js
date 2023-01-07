/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minDistance = function(s1, s2) {
  const memo = new Map()
  return dp(s1.length - 1, s2.length - 1)

  function dp(i, j) {
    if (i === -1) return j + 1
    if (j === -1) return i + 1

    let current = `${i}${j}`
    if (memo.get(current)) {
      return memo.get(current)
    }

    if (s1[i] === s2[j]) {
      memo.set(current, dp(i - 1, j - 1))
    } else {
      memo.set(
        current,
        min(
          dp(i, j - 1) + 1, // insert
          dp(i - 1, j) + 1, // delete
          dp(i - 1, j - 1) + 1 // replace
        )
      )
    }
    return memo.get(current)
  }

  function min(a, b, c) {
    return Math.min(a, Math.min(b, c))
  }
}
// @lc code=end

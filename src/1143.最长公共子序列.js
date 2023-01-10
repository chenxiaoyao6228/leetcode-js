/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
// var longestCommonSubsequence = function(s1, s2) {
//   const memo = new Map()
//   return dp(s1.length - 1, s2.length - 1)

//   function dp(i, j) {
//     if (i == -1 || j == -1) {
//       return 0
//     }
//     let current = `${i}${j}`
//     if (memo.get(current)) {
//       return memo.get(current)
//     }
//     let res
//     if (s1[i] === s2[j]) {
//       res = dp(i - 1, j - 1) + 1
//     } else {
//       res = Math.max(dp(i - 1, j), dp(i, j - 1))
//     }
//     memo.set(current, res)
//     return res
//   }
// }
var longestCommonSubsequence = function(s1, s2) {
  let m = s1.length,
    n = s2.length
  let dp = new Array(n + 1).fill(null).map(i => new Array(m + 1).fill(0))
  console.log('dp', dp)
  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (s1[i - 1] == s2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[s1.length - 1][s2.length - 1]
}
console.log(longestCommonSubsequence('abc', 'daebfgc'))
// @lc code=end

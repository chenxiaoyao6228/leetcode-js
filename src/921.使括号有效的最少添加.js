/*
 * @lc app=leetcode.cn id=921 lang=javascript
 *
 * [921] 使括号有效的最少添加
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

// can't simply compare left and right parentheses
// eg: '())(', left and right have the same number, but not valid
var minAddToMakeValid = function(s) {
  let res = 0 // left parentheses to insert
  let need = 0 // the need for right parentheses
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (char === '(') {
      need++
    }
    if (char === ')') {
      need--
      if (need === -1) {
        need = 0
        res++
      }
    }
  }
  return res + need
}
// @lc code=end

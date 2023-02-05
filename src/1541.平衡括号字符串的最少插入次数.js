/*
 * @lc app=leetcode.cn id=1541 lang=javascript
 *
 * [1541] 平衡括号字符串的最少插入次数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
  let res = 0
  let needOfRight = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      needOfRight += 2
      if (needOfRight % 2 === 1) {
        res++ // add one left parenthesis
        needOfRight--
      }
    }
    if (s[i] === ')') {
      needOfRight--
      // too many right parenthesis
      if (needOfRight == -1) {
        res++ // add one left parenthesis
        needOfRight = 1
      }
    }
  }
  return needOfRight + res
}
// @lc code=end

module.exports = { minInsertions }

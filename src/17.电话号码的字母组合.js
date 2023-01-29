/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const mapping = [
    '',
    '',
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz'
  ]
  const res = []
  if (digits.length === 0) {
    return res
  }
  backtrack(digits, 0, [])
  return res

  function backtrack(digits, start, sb = []) {
    if (sb.length === digits.length) {
      res.push(sb.join(''))
      return
    }
    for (let i = start; i < digits.length; i++) {
      const digit = Number(digits.charAt(i))
      const str = mapping[digit]
      for (let j = 0; j < str.length; j++) {
        let c = str.charAt(j)
        sb.push(c)
        backtrack(digits, i + 1, sb)
        sb.pop()
      }
    }
  }
}
// @lc code=end

module.exports = { letterCombinations }

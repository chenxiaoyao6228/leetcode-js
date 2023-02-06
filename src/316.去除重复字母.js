/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// same as 1081
var removeDuplicateLetters = function(s) {
  const stack = new Array()
  const inStackObj = {}
  const countObj = {}

  for (let i = 0; i < s.length; i++) {
    const ch = s[i]
    if (countObj[ch] === undefined) {
      countObj[ch] = 0
    }
    countObj[ch]++
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    countObj[char]--

    if (inStackObj[char]) {
      continue
    }
    // remember to get ch from pop obj
    while (stack.length && peekStack(stack).ch > char) {
      if (countObj[peekStack(stack).ch] === 0) {
        break
      }
      inStackObj[stack.pop().ch] = false
    }
    stack.push({ ch: char })
    inStackObj[char] = true
  }

  return stack.map(s => s.ch).join('')

  function peekStack(s) {
    return s[s.length - 1]
  }
}

// @lc code=end

module.exports = { removeDuplicateLetters }

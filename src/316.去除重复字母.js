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
/*
 * 1. Forget about `the smallest in lexicographical order`, try to remove duplicate letters
 * 2. compare order before pushing element into the stack
 * 3. add `countObj` to skip pop operation when the element's count is 0.s
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
    let char = s[i]

    countObj[char]--

    if (inStackObj[char]) {
      continue
    }

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

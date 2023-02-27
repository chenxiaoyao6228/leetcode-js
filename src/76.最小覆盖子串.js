/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} source
 * @param {string} target
 * @return {string}
 */
var minWindow = function(source, target) {
  let windowObj = {},
    needObj = {}
  for (let i = 0; i < target.length; i++) {
    const a = target[i]
    // update needObj
    if (needObj[a] == undefined) {
      needObj[a] = 0
    }
    needObj[a]++

    // update window
    if (windowObj[a] == undefined) {
      windowObj[a] = 0
    }
  }

  let left = 0,
    right = 0,
    validNum = 0,
    // case specific params:  use start index and len to get minimum string
    start = 0,
    len = Infinity
  while (right < source.length) {
    const c = source[right]
    right++

    if (needObj[c]) {
      windowObj[c]++
      if (needObj[c] === windowObj[c]) {
        validNum++
      }
    }
    // shrink
    while (validNum === Object.keys(needObj).length) {
      if (right - left < len) {
        start = left
        len = right - left
      }

      const d = source[left]
      left++

      if (needObj[d]) {
        if (needObj[d] === windowObj[d]) {
          validNum--
        }
        windowObj[d]--
      }
    }
  }

  return len === Infinity ? '' : source.substring(start, start + len)
}

// @lc code=end

module.exports = { minWindow }

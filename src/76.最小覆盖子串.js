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
  let need = {}
  let window = {}

  let valid = 0,
    left = 0,
    right = 0,
    start = 0,
    len = Infinity
  // init data
  for (let i = 0; i < target.length; i++) {
    const el = target[i]
    if (need[el] == undefined) {
      need[el] = 0
      window[el] = 0
    }
    need[el]++
  }

  // move right cursor
  while (right < source.length) {
    const c = source[right]
    right++
    if (need[c]) {
      window[c]++
      if (need[c] === window[c]) {
        valid++
      }
    }

    // check if we need to shrink window
    while (valid === Object.keys(need).length) {
      // update result
      if (right - left < len) {
        start = left
        len = right - left
      }
      let d = source[left]
      left++
      if (need[d]) {
        if (window[d] === need[d]) {
          valid--
        }
        window[d]--
      }
    }
  }
  return len === Infinity ? '' : source.substring(start, start + len)
}

minWindow('ADOBECODEBANC', 'ABC')
// @lc code=end

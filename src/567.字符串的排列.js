/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} target
 * @param {string} source
 * @return {boolean}
 */
var checkInclusion = function(target, source) {
  const need = {}
  const window = {}

  for (let i = 0; i < target.length; i++) {
    let char = target[i]
    if (!need[char]) {
      need[char] = 1
    } else {
      need[char]++
    }
    // init
    if (!window[char]) {
      window[char] = 0
    }
  }

  let left = 0,
    right = 0,
    valid = 0

  // advance right pointer
  while (right < source.length) {
    const c = source[right]
    right++

    // update data
    if (need[c]) {
      if (!window[c]) {
        window[c] = 0
      }
      window[c]++

      // window: {a: 2, b: 1} => need: {a:2} => valid
      if (window[c] == need[c]) {
        valid++
      }
    }

    // begin to check if already contains substring
    while (right - left > target.length) {
      if (valid == Object.keys(need).length) {
        return true
      }
      // move left pointer
      const d = source[left]
      left++
      if (need[d]) {
        if (window[d] === need[d]) {
          valid--
        }
        window[d]--
      }
    }
  }
  return false
}

checkInclusion('ab', 'eidbaooo')
// @lc code=end

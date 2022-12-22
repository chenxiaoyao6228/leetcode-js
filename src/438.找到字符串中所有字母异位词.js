/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} source
 * @param {string} target
 * @return {number[]}
 */
var findAnagrams = function(source, target) {
  let need = {}
  let window = {}

  // init all data
  for (let i = 0; i < target.length; i++) {
    const t = target[i]
    if (!need[t]) {
      need[t] = 1
    } else {
      need[t]++
    }
    window[t] = 0
  }

  let left = 0,
    right = 0,
    valid = 0
  const res = []
  // move right pointer
  while (right < source.length) {
    let c = source[right]
    right++
    if (need[c]) {
      window[c]++
      if (window[c] === need[c]) {
        valid++
      }
    }
    // move left pointer
    while (right - left > target.length) {
      // update data
      if (valid === Object.keys(need).length) {
        res.push(left)
      }
      let d = source[left]
      left++
      if (need[d]) {
        window[d]--
        if (window[d] === need[d]) {
          valid--
        }
      }
    }
  }
}
// @lc code=end

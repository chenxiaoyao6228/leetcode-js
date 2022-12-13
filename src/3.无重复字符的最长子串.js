/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// "pwwkew" => "wke" => 3
var lengthOfLongestSubstring = function(s) {
  let window = {}
  let left = 0,
    right = 0,
    res = 0
  while (right < s.length) {
    let c = s[right]
    if (!window[c]) {
      window[c] = 0
    }
    window[c]++
    right++
    while (window[c] > 1) {
      let d = s[left]
      left++
      window[d]--
    }
    // update res
    res = Math.max(res, right - left)
  }
  return res
}
// @lc code=end

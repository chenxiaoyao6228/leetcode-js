/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let res = ''
  for (let i = 0; i < s.length; i++) {
    let s1 = palindrome(s, i, i)
    let s2 = palindrome(s, i, i + 1)
    res = res.length > s1.length ? res : s1
    res = res.length > s2.length ? res : s2
  }
  return res
}

// find palindrome in s[l] and s[r]
function palindrome(s, l, r) {
  while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
    l--, r++
  }
  return s.substring(l + 1, r)
}
// @lc code=end

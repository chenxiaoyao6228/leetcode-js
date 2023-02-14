/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  // two pointer + vowel map
  let left = 0
  let right = s.length - 1
  const arr = s.split('')
  while (left < right) {
    if (!isVowel(arr[left])) {
      left++
      continue
    }
    if (!isVowel(arr[right])) {
      right--
      continue
    }
    swap(arr, left, right)
    left++
    right--
  }
  return arr.join('')

  function isVowel(ch) {
    return ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].indexOf(ch) > -1
  }
  function swap(s, i, j) {
    const temp = s[i]
    s[i] = s[j]
    s[j] = temp
  }
}
// @lc code=end

module.exports = { reverseVowels }

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
  // init common
  let needObj = {},
    windowObj = {}
  for (let i = 0; i < target.length; i++) {
    const char = target[i]
    if (needObj[char] === undefined) {
      needObj[char] = 0
      windowObj[char] = 0
    }
    needObj[char]++
  }
  let left = 0,
    right = 0,
    validNum = 0,
    res = []
  // init specific
  while (right < source.length) {
    const rightChar = source[right]
    right++
    if (needObj[rightChar]) {
      windowObj[rightChar]++
      if (needObj[rightChar] === windowObj[rightChar]) {
        validNum++
      }
    }
    // 💥: check condition
    while (validNum === Object.keys(needObj).length) {
      if (right - left === target.length) {
        res.push(left)
      }
      const leftChar = source[left]
      left++
      if (needObj[leftChar]) {
        windowObj[leftChar]--
        // 💥: use '>'
        if (needObj[leftChar] > windowObj[leftChar]) {
          validNum--
        }
      }
    }
  }
  return res
}

// @lc code=end

module.exports = { findAnagrams }

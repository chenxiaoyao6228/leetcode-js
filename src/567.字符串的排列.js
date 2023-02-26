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
  // since we need to count each char, we init all container with 'Map' instead of set
  const needObj = {}
  const windowObj = {}
  // init two window
  for (let i = 0; i < target.length; i++) {
    let char = target[i]
    if (!needObj[char]) {
      needObj[char] = 1
    } else {
      needObj[char]++
    }
    if (!windowObj[char]) {
      windowObj[char] = 0
    }
  }
  let left = 0,
    right = 0,
    // valid charater length, will be used to compare with need's length
    validNum = 0

  // expand window: move right pointer
  while (right < source.length) {
    const char = source[right]
    right++

    // update data: window, validNum
    if (needObj[char]) {
      windowObj[char]++

      // window: {a: 2, b: 1} => need: {a:2} => a is valid,  valid++
      if (windowObj[char] == needObj[char]) {
        validNum++
      }
    }

    // shrink window condition
    while (right - left > target.length) {
      // check terminal condition
      if (validNum == Object.keys(needObj).length) return true
      // move left pointer,  reverse update
      const d = source[left]

      if (needObj[d]) {
        windowObj[d]--
        if (windowObj[d] === needObj[d]) {
          validNum--
        }
      }
      left++
    }
  }
  return false
}

checkInclusion('ab', 'eidboaoo')
// @lc code=end

module.exports = { checkInclusion }

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
  const needObj = {}
  const windowObj = {}
  for (let i = 0; i < target.length; i++) {
    let char = target[i]
    // init windowObj and needObj
    // 💥: should not use !needObj[char] for checking, cause when 'needObj[char] = 0' this will still pass
    if (needObj[char] === undefined) {
      needObj[char] = 0
      windowObj[char] = 0
    }
    needObj[char]++
  }

  // valid charater length, will be used to compare with need's length
  let left = 0,
    right = 0,
    validNum = 0

  // expand window: move right pointer
  while (right < source.length) {
    const r = source[right]
    right++

    // update data: window, validNum
    if (needObj[r]) {
      windowObj[r]++
      // window: {a: 2, b: 1} => need: {a:2} => a is valid,  valid++
      if (windowObj[r] == needObj[r]) {
        validNum++
      }
    }

    // shrink window condition
    while (validNum === Object.keys(needObj).length) {
      if (right - left === target.length) return true
      let d = source[left]
      if (needObj[d]) {
        windowObj[d]--
        if (windowObj[d] < needObj[d]) {
          validNum--
        }
      }
      left++
    }

    // 💥: wrong attempt, checkInclusion('ab', 'boa') => throws error
    // while (right - left >= target.length) {
    //   if (validNum == Object.keys(needObj).length) {
    //     return true
    //   }
    //   const l = source[left]
    //   left++
    //   if (needObj[l]) {
    //     windowObj[l]--
    //     if (windowObj[l] === needObj[l]) {
    //       validNum--
    //     }
    //   }
    // }
  }
  return false
}

// @lc code=end

module.exports = { checkInclusion }

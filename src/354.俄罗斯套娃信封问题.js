/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
// ❗time exceeded
var maxEnvelopes = function(envelopes) {
  // sort the matrix by width in (❗increasing) and height in (❗decreasing order)
  const sorted = envelopes.sort((a, b) => {
    return a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]
  })
  // and then by height and covert two dimensional problem to one dimension
  const heightList = sorted.map(item => item[1])
  return LIS(heightList)

  function LIS(arr) {
    const dp = new Array(arr.length).fill(1)
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < i; j++) {
        if (arr[i] > arr[j]) {
          dp[i] = Math.max(dp[i], dp[j] + 1)
        }
      }
    }
    let res = -Infinity
    for (let k = 0; k < dp.length; k++) {
      if (dp[k] > res) {
        res = dp[k]
      }
    }
    return res
  }
}
// @lc code=end

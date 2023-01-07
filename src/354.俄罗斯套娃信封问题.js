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
var maxEnvelopes = function(envelopes) {
  // sort the matrix by width and then by height and covert two dimensional problem to one dimension
  const sorted = envelopes.sort((a, b) => {
    const [a1, a2] = a
    const [b1, b2] = b
    return a1 - b1 || a2 - b2
  })
  const heightList = sorted.map(item => item[1])
  //   console.log('heightList', heightList)
  // call LIS for the height
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
// console.log(
//   maxEnvelopes([
//     [5, 4],
//     [6, 4],
//     [6, 7],
//     [2, 3]
//   ])
// )
// @lc code=end

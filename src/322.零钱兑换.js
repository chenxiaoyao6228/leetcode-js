/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

const { map } = require('async')

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  // if all use 1 to make the coin change, then you need at least n
  let memo = new Map()
  return dp(coins, amount)

  function dp(coins, amount) {
    // base case
    if (amount == 0) return 0
    if (amount < 0) return -1

    if (memo.get(amount)) {
      return memo.get(amount)
    }

    let res = Infinity

    for (let i = 0; i < coins.length; i++) {
      const c = coins[i]
      const subProblem = dp(coins, amount - c)
      if (subProblem == -1) {
        continue
      }
      // +1
      res = Math.min(res, subProblem + 1)
    }

    memo.set(amount, res == Infinity ? -1 : res)
    return memo.get(amount)
  }
}

coinChange([1, 2, 5], 11)
// @lc code=end

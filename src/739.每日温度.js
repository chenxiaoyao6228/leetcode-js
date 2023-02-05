/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  const n = temperatures.length
  const res = new Array(n).fill(0)
  const stack = new Array(n).fill(0)
  stack.peek = () => stack[stack.length - 1]

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && temperatures[stack.peek()] <= temperatures[i]) {
      stack.pop()
    }
    // push index into stack instead of current element
    res[i] = stack.length ? stack.peek() - i : 0
    stack.push(i)
  }
  return res
}
// @lc code=end

module.exports = { dailyTemperatures }

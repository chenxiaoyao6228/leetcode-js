/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  const n = nums.length
  const res = new Array(n)
  const stack = []
  stack.peek = () => stack[stack.length - 1]
  for (let i = 2 * n - 1; i >= 0; i--) {
    // use mod to mock cyclic array
    const mod = i % n
    while (stack.length > 0 && stack.peek() <= nums[mod]) {
      stack.pop()
    }
    res[mod] = stack.length === 0 ? -1 : stack.peek()
    stack.push(nums[mod])
  }
  return res
}

// @lc code=end

module.exports = { nextGreaterElements }

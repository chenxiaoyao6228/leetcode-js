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
  // 利用循环数组的技巧来模拟数组长度翻倍的效果
  for (let i = 2 * n - 1; i >= 0; i--) {
    const mod = i % n
    while (stack.length > 0 && stack[stack.length - 1] <= nums[mod]) {
      stack.pop()
    }
    res[mod] = stack.length === 0 ? -1 : stack[stack.length - 1]
    stack.push(nums[mod])
  }
  return res
}

const nums = [1, 2, 3, 4, 3]

console.log('num', nextGreaterElements(nums))
// @lc code=end

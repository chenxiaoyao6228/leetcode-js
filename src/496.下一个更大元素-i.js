/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var nextGreaterElement = function(nums1, nums2) {
  const res = []
  const greaterMap = nextGreaterElementOffArr(nums2)
  for (let i = 0; i < nums1.length; i++) {
    res[i] = greaterMap[nums1[i]]
  }
  return res

  function nextGreaterElementOffArr(nums) {
    const n = nums.length
    const resMap = {}
    const stack = new Array(n).fill(-1)
    for (let i = n - 1; i >= 0; i--) {
      while (stack.length && stack[stack.length - 1] <= nums[i]) {
        stack.pop()
      }
      resMap[nums[i]] = stack.length ? stack[stack.length - 1] : -1
      stack.push(nums[i])
    }
    return resMap
  }
}

// @lc code=end

module.exports = { nextGreaterElement }

// template
// var nextGreaterElement = function(nums) {
//   const n = nums.length
//   const res = new Array(n).fill(-1)
//   const stack = new Array()
//   for (let i = n - 1; i >= 0; i--) {
//     // tip: imagine nums = [1, 2, 4, 3] as people waiting in line, and nums[i] is the height of people[i]
//     // stack contains the number behind nums[i], excute stack.peek() until stack is empty
//     //  we can compare nums[i] and numbers behind it, the first one is the nextGreatest number
//     // eg: nums = [1, 2, 4, 3] num[1] = 2,  currently:  stack = [3,4]
//     // if we excecute stack.pop(), we get 4, which is the first greatest number that 2 can see
//     while (stack.length && stack[stack.length - 1] <= nums[i]) {
//       stack.pop()
//     }
//     res[i] = stack.length ? stack[stack.length - 1] : -1
//     stack.push(nums[i])
//   }
//   return res
// }

// const res = nextGreaterElement([2, 1, 2, 4, 3])
// console.log('res', res)

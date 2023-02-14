/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// bruteForce: without using the characteristics of sorted array
// var twoSum = function(numbers, target) {
//   for (let i = 0; i < numbers.length - 1; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === target) {
//         return [i + 1, j + 1]
//       }
//     }
//   }
//   throw 'invalid input with no solutions'
// }

// // binarySearch for the rest array, O(nlog(n))
// var twoSum = function(numbers, target) {
//   for (let i = 0; i < numbers.length; i++) {
//     let complement = target - numbers[i]
//     let leftIndex = i + 1
//     let rightIndex = numbers.length - 1
//     while (leftIndex <= rightIndex) {
//       let midIndex = (leftIndex + rightIndex) >> 1
//       let current = numbers[midIndex]
//       if (current === complement) {
//         return [i + 1, midIndex + 1]
//       } else if (current < complement) {
//         leftIndex = midIndex + 1
//       } else {
//         rightIndex = midIndex - 1
//       }
//       if (midIndex === leftIndex) {
//         break
//       }
//     }
//   }
//   throw 'invalid input with no solutions'
// }

// O(n) solution
var twoSum = function(numbers, target) {
  let leftIndex = 0
  let rightIndex = numbers.length - 1
  while (leftIndex < rightIndex) {
    let sum = numbers[leftIndex] + numbers[rightIndex]
    if (sum === target) {
      return [leftIndex + 1, rightIndex + 1] // 1-based index
    } else if (sum < target) {
      leftIndex++
    } else {
      rightIndex--
    }
  }
  throw 'invalid input with no solutions'
}
// @lc code=end

module.exports = { twoSum }

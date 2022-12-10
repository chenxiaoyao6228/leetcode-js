/*
 * @lc app=leetcode.cn id=1094 lang=javascript
 *
 * [1094] 拼车
 */

// @lc code=start
/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
const BusStopMaxLength = 1000
var carPooling = function(trips, capacity) {
  let underCapacity = true
  const nums = new Array(BusStopMaxLength + 1).fill(0)
  const diff = new Difference(nums)
  trips.forEach(trip => {
    let val = trip[0]
    let start = trip[1]
    let end = trip[2] - 1
    diff.increment(val, start, end)
  })
  const results = diff.getResults()

  for (let i = 0; i < results.length; i++) {
    const res = results[i]
    if (res > capacity) {
      underCapacity = false
      break
    }
  }
  return underCapacity
}

const Difference = function(nums) {
  this.diff = new Array(nums.length)
  this.diff[0] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    this.diff[i] = nums[i] - nums[i - 1]
  }
}
Difference.prototype.increment = function(val, start, end) {
  this.diff[start] += val
  if (end + 1 < this.diff.length) {
    this.diff[end + 1] -= val
  }
}
Difference.prototype.getResults = function() {
  const res = new Array(this.diff.length)
  res[0] = this.diff[0]
  for (let i = 1; i < this.diff.length; i++) {
    res[i] = res[i - 1] + this.diff[i]
  }
  return res
}

// @lc code=end

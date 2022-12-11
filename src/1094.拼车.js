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
const maxBusStopNum = 1000
var carPooling = function(trips, capacity) {
  let isUnderCapacity = true
  const nums = new Array(maxBusStopNum + 1).fill(0)
  const diff = new Difference(nums)
  trips.forEach(trip => {
    const val = trip[0]
    const start = trip[1]
    const end = trip[2] - 1 // ❗ don't forget this
    diff.increment(val, start, end)
  })
  const results = diff.getResult()
  for (let i = 0; i < results.length; i++) {
    const res = results[i]
    if (res > capacity) {
      isUnderCapacity = false
      break
    }
  }
  return isUnderCapacity
}

/*
 * input: trips = [[2,1,5],[3,3,7]], capacity = 4
 * process: [2,1,5] -> [2,0,0,0,0] => [3,3,7] -> [2,0,3,0,0,-2, 0, -3,0]
 */

class Difference {
  constructor(nums) {
    this.diff = new Array(nums.length)
    this.diff[0] = nums[0]
    for (let i = 1; i < this.diff.length; i++) {
      this.diff[i] = nums[i] - nums[i - 1]
    }
  }
  // [1,3,5,8] -> [1,2,2,3] => increment([1,1,2]) => [1,4,6,8] -> [1,3,2,2]
  increment(val, i, j) {
    this.diff[i] += val
    if (j + 1 < this.diff.length) {
      this.diff[j + 1] -= val
    }
  }
  getResult() {
    let res = [this.diff[0]]
    for (let i = 1; i < this.diff.length; i++) {
      res[i] = this.diff[i] + res[i - 1]
    }
    return res
  }
}

// @lc code=end

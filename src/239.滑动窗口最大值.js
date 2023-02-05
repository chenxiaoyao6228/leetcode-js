/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

//  tail(pop)->[3,-1,3]->head(push)
class MonotonicQueue {
  constructor(nums) {
    this._queue = []
  }
  // add element n to the tail of the queue
  push(n) {
    // eg: [5,3,2,1] <- 4, imaging the new 4 crashing all the left element
    while (this._queue.length && this._queue[this._queue.length - 1] < n) {
      this._queue.pop()
    }
    this._queue.push(n)
  }
  // if the head of queue is n, then delete it
  shift(n) {
    if (n == this._queue[0]) {
      this._queue.shift()
    }
  }
  // return the max element in the queue
  max() {
    return this._queue[0]
  }
}

var maxSlidingWindow = function(nums, k) {
  const window = new MonotonicQueue()
  const res = []
  for (let i = 0; i < nums.length; i++) {
    if (i < k - 1) {
      // fill the window with k-1 elements first
      window.push(nums[i])
    } else {
      // window slide left and add new number
      window.push(nums[i])
      // record the max number
      res.push(window.max())

      // remove old tail val
      window.shift(nums[i - k + 1])
    }
  }
  return res
}
// @lc code=end

module.exports = { maxSlidingWindow }

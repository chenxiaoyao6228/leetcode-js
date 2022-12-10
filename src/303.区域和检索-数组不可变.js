/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.preSum = new Array(nums.length + 1)
  this.preSum[0] = 0 // preSum.length + 1 make it easier to calculate
  for (let i = 1; i < this.preSum.length; i++) {
    this.preSum[i] = this.preSum[i - 1] + nums[i - 1]
  }
}

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  return this.preSum[right + 1] - this.preSum[left]
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end
// [-2,0,3,-5,2,-1] => [null, -2, 0, 1]

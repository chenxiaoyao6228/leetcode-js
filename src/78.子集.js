/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const res = []
  const track = []
  backtrack(nums, 0)
  return res

  function backtrack(nums, start) {
    res.push(track.slice(0))

    for (let i = start; i < nums.length; i++) {
      track.push(nums[i])
      backtrack(nums, i + 1)
      track.pop()
    }
  }
}
// @lc code=end

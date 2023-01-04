/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  if (candidates.length === 0) {
    return []
  }
  const res = []
  const track = []
  let trackSum = 0
  backtrack(candidates, 0, target)
  return res

  function backtrack(nums, start, target) {
    if (trackSum === target) {
      res.push(track.slice(0))
      return
    }
    if (trackSum > target) {
      return
    }
    // consider: can we remove the start parameter and set i = 0 ?
    for (let i = start; i < nums.length; i++) {
      track.push(nums[i])
      trackSum += nums[i]
      // pay attention to the "i"
      backtrack(nums, i, target)
      track.pop()
      trackSum -= nums[i]
    }
  }
}
// @lc code=end

/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  if (candidates.length == 0) {
    return []
  }
  const res = []
  const track = []
  candidates.sort((a, b) => a - b)
  backtrack(candidates, target, 0)
  return res

  function backtrack(nums, target, start) {
    // TODO use trackSum to optimize
    const sum = track.reduce((prev, cur) => prev + cur, 0)
    if (sum === target) {
      res.push(track.slice(0))
      return
    }
    if (sum > target) {
      return
    }
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue
      }
      track.push(nums[i])
      backtrack(nums, target, i + 1)
      track.pop()
    }
  }
}
// combinationSum2([10, 1, 2, 7, 6, 1, 5])
// @lc code=end

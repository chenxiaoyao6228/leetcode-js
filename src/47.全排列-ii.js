/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  if (nums.length === 0) {
    return []
  }
  const res = []
  const track = []
  const used = []
  nums.sort((a, b) => a - b)
  backtrack(nums)
  return res

  function backtrack(nums, start) {
    if (track.length === nums.length) {
      res.push(track.slice(0))
    }

    for (let i = 0; i < nums.length; i++) {
      // [2,2',2''], [2,2'',2']=>  !used[i - 1] => make sure [2,2'] is in order
      // and 2' is only choose after 2
      if (used[i]) {
        continue
      }
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
        continue
      }
      track.push(nums[i])
      used[i] = true
      backtrack(nums)
      used[i] = false
      track.pop()
    }
  }
}
// @lc code=end

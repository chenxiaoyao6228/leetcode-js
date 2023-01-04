/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function(nums) {
  const res = []
  const track = []
  const used = []
  backtrack(nums)
  return res

  function backtrack(nums) {
    if (track.length === nums.length) {
      res.push(track.slice(0))
    }
    // start from 0 and  use 'used' array to trim the branch
    // no need for the start index
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
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

// permute([1, 2, 3])
// @lc code=end

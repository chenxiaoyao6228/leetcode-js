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
  backtrack(nums, track, used)
  return res

  function backtrack(nums, track, used) {
    if (track.length === nums.length) {
      res.push(track.slice(0))
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
        continue
      }

      track.push(nums[i])
      used[i] = true

      backtrack(nums, track, used)

      used[i] = false
      track.pop()
    }
  }
}

permute([1, 2, 3])
// @lc code=end

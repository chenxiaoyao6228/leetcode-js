/*
 * @lc app=leetcode.cn id=710 lang=javascript
 *
 * [710] 黑名单中的随机数
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} blacklist
 */
var Solution = function(n, blacklist) {
  // map all value in the blacklist to the end
  // n = 5 =>  [0,1,2,3,4], [1,3]
  this.mapping = new Map()
  const m = blacklist.length
  this.lowBound = n - m
  const blackSet = new Set()
  for (const b of blacklist) {
    // if b is already in [lowBound, n], no need for remapping
    if (b >= this.lowBound) {
      blackSet.add(b)
    }
  }
  let count = this.lowBound
  for (const b of blacklist) {
    if (b < this.lowBound) {
      while (blackSet.has(count)) {
        ++count
      }
      // remap all illegal val
      this.mapping.set(b, count)
      ++count
    }
  }
}

/**
 * @return {number}
 */
Solution.prototype.pick = function() {
  const randomIndex = Math.floor(Math.random() * this.lowBound)
  return this.mapping.get(randomIndex) || randomIndex
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n, blacklist)
 * var param_1 = obj.pick()
 */
// @lc code=end

module.exports = { Solution }

// const obj = new Solution(5, [1, 2])
// const res = obj.pick()
// console.log('res', res)

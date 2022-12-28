/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

let memo
var numTrees = function(n) {
  memo = initMemo(n)
  // count BST in [1,n]
  return count(1, n)
}
function initMemo(n) {
  const memo = []
  for (let i = 0; i < n + 1; i++) {
    if (!memo[i]) {
      memo[i] = []
    }
    for (let j = 0; j < n + 1; j++) {
      memo[i][j] = 0
    }
  }
  return memo
}

// count BST in [lo, hi]
function count(lo, hi) {
  // [lo,hi] is empty array, should count as one situation
  if (lo > hi) return 1
  if (memo[lo][hi] !== 0) {
    return memo[lo][hi]
  }
  let res = 0
  for (let mid = lo; mid <= hi; mid++) {
    // i as root
    let left = count(lo, mid - 1)
    let right = count(mid + 1, hi)
    // total = left subTree * right subTree
    // eg: i = 3, left{1,2}, right{4,5} => left * right = 2 * 2 = 4
    res += left * right
  }
  memo[lo][hi] = res

  return res
}

numTrees(5)
// @lc code=end

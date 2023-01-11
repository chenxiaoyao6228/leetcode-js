/*
 * @lc app=leetcode.cn id=773 lang=javascript
 *
 * [773] 滑动谜题
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
  const sb = []
  for (let i = 0; i < 2; ++i) {
    for (let j = 0; j < 3; ++j) {
      sb.push(board[i][j])
    }
  }
  const initial = sb.join('')
  if ('123450' === initial) {
    return 0
  }

  const neighbors = [
    [1, 3],
    [0, 2, 4],
    [1, 5],
    [0, 4],
    [1, 3, 5],
    [2, 4]
  ]
  let step = 0
  const queue = []
  queue.push(initial)
  const seen = new Set()
  seen.add(initial)

  // 枚举 status 通过一次交换操作得到的状态
  const get = status => {
    const ret = []
    const array = Array.from(status)
    // 找到‘0’的索引，然后上下左右进行互换
    const x = status.indexOf('0')
    // 逐一和neighbors互换
    for (const y of neighbors[x]) {
      ;[array[x], array[y]] = [array[y], array[x]]
      ret.push(array.join(''))
      ;[array[x], array[y]] = [array[y], array[x]]
    }
    return ret
  }

  while (queue.length) {
    ++step // ++step vs step++ at the end
    const size = queue.length
    for (let i = 0; i < size; ++i) {
      const status = queue.shift()
      for (const nextStatus of get(status)) {
        if (!seen.has(nextStatus)) {
          if ('123450' === nextStatus) {
            return step
          }
          queue.push(nextStatus)
          seen.add(nextStatus)
        }
      }
    }
  }

  return -1
}

// slidingPuzzle([
//   [4, 1, 2],
//   [5, 0, 3]
// ])
// @lc code=end

/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] 打开转盘锁
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
  // some little optimizations
  if (target === '0000') return 0
  if (deadends.some(d => d === target)) return -1

  const deadsSet = new Set(deadends)
  const visitedSet = new Set()
  const queue = ['0000']
  visitedSet.add('0000')
  let step = 0
  while (queue.length > 0) {
    let len = queue.length
    for (let i = 0; i < len; i++) {
      let cur = queue.shift()
      // node manipulation
      if (cur === target) {
        return step
      }
      if (deadsSet.has(cur)) {
        continue
      }
      // add adjacent node
      for (let j = 0; j < 4; j++) {
        let up = plusOne(cur, j)
        if (!visitedSet.has(up)) {
          queue.push(up)
          visitedSet.add(up)
        }
        let down = minusOne(cur, j)
        if (!visitedSet.has(down)) {
          queue.push(down)
          visitedSet.add(down)
        }
      }
    }
    step++
  }

  return -1
  // '0000', 2 => '0010'
  function plusOne(str, i) {
    const arr = str.split('')
    if (arr[i] == '9') {
      arr[i] = '0'
    } else {
      arr[i] = Number(arr[i]) + 1
    }
    return arr.join('')
  }
  function minusOne(str, i) {
    const arr = str.split('')
    if (arr[i] == '0') {
      arr[i] = '9'
    } else {
      arr[i] = Number(arr[i]) - 1
    }
    return arr.join('')
  }
}

/* 
  tips: 
  1. optimization: if deadends contains '0000' => return -1, target === '0000' => return 0
  3. javascript create Set from array => new Set(arr)
  4. break statement vs continue statement vs return statement in for loop
*/

// let res = openLock(['0201', '0101', '0102', '1212', '2002'])
// console.log('res', res)
// @lc code=end

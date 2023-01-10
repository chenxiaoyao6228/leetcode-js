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
  const deadsSet = new Set()
  deadends.forEach(d => deadsSet.add(d))
  const visitedMap = new Map()
  let step = 0
  const queue = ['0000']
  visitedMap.set('0000', true) // remember to add this
  while (queue.length > 0) {
    let len = queue.length
    for (let i = 0; i < len; i++) {
      let cur = queue.shift()
      // node manipulation
      if (deadsSet.has(cur)) {
        continue
      }
      if (cur === target) {
        return step
      }
      // add adjacent node
      for (let j = 0; j < 4; j++) {
        let up = plusOne(cur, j)
        if (!visitedMap.has(up)) {
          queue.push(up)
          visitedMap.set(up, true)
        }
        let down = minusOne(cur, j)
        if (!visitedMap.has(down)) {
          queue.push(down)
          visitedMap.set(down, true)
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

// var openLock = function(deadends, target) {
//   const targetLen = 4
//   const deadMap = new Map()
//   deadends.forEach(d => deadMap.set(d, true))
//   const visted = new Map()
//   let step = 0
//   const queue = ['0000']
//   visted.set('0000', true)

//   while (queue.length > 0) {
//     let len = queue.length
//     for (let i = 0; i < len; i++) {
//       let node = queue.shift()
//       if (deadMap.get(node)) {
//         continue
//       }
//       // should check before add
//       // if (visted.get(node)) {
//       //   break
//       // }
//       if (node === target) {
//         return step
//       }
//       // for every move, you have 2^targetLen choices
//       for (let j = 0; j < targetLen; j++) {
//         let up = add(node, j)
//         if (!visted.get(up)) {
//           queue.push(up)
//           visted.set(up, true)
//         }
//         let down = minus(node, j)
//         if (!visted.get(down)) {
//           queue.push(down)
//           visted.set(down, true)
//         }
//       }
//     }
//     step++
//   }

//   return -1

//   function add(target, i) {
//     const arr = target.split('')
//     if (arr[i] === '9') {
//       arr[i] = '0'
//     } else {
//       arr[i] = Number(arr[i]) + 1
//     }
//     return arr.join('')
//   }

//   function minus(target, i) {
//     const arr = target.split('')
//     if (arr[i] === '0') {
//       arr[i] = '9'
//     } else {
//       arr[i] = Number(arr[i]) - 1 + ''
//     }
//     return arr.join('')
//   }
// }

// let res = openLock(['0201', '0101', '0102', '1212', '2002'])
// console.log('res', res)
// @lc code=end

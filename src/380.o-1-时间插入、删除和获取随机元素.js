/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 */

// @lc code=start

var RandomizedSet = function() {
  // initialize and map and arr
  this.valToIndexMap = new Map()
  this.arr = new Array()
}

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  // check if the value exists, if exist, return false
  if (this.valToIndexMap.has(val)) {
    return false
  }
  // add val to tail
  this.arr.push(val)
  // record index
  this.valToIndexMap.set(val, this.arr.length - 1)
  // return true
  return true
}

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  // if val is  not existed, return false
  if (!this.valToIndexMap.has(val)) {
    return false
  }

  // find the value and index at tail
  let tailIndex = this.arr.length - 1
  let tailVal = this.arr[tailIndex]

  // find indexToRemove of val
  let indexToRemove = this.valToIndexMap.get(val)

  // update valToIndexMap
  // 1. update valueAtDetail's index to indexToRemove
  this.valToIndexMap.set(tailVal, indexToRemove)

  // 2. delete val(not index) at valToIndexMap
  this.valToIndexMap.delete(val)

  // swap current val with the val at tail
  swap(this.arr, indexToRemove, tailIndex)

  // pop tail val
  this.arr.pop()

  // return true
  return true

  function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
}

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  // use random function to update
  return this.arr[Math.floor(Math.random() * this.arr.length)]
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

// const randomSet = new RandomizedSet()
// console.log(randomSet.insert(1)) // true
// console.log(randomSet.insert(2)) // true
// console.log(randomSet.insert(3)) // true
// console.log(randomSet.insert(2)) // false
// console.log(randomSet.remove(2)) // true
// console.log('randomSet.arr', randomSet.arr) // [1,3]
// console.log(randomSet.remove(2)) // false
// console.log(randomSet.getRandom()) // any

module.exports = { RandomizedSet }

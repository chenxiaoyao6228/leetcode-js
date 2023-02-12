/*
 * @lc app=leetcode.cn id=460 lang=javascript
 *
 * [460] LFU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */

var LFUCache = function(capacity) {
  // init keyToValMap
  this._keyToValMap = new Map()
  // init keyToFreqMap
  this._keyToFreqMap = new Map()
  // init freqToKeysMap
  // each freq will have a orderd Set
  this._freqToKeysMap = new Map()
  this._size = 0
  this._capacity = capacity
  this._minFreq = 0
}

LFUCache.prototype._increaseFreByKey = function(key) {
  const oldFreq = this._keyToFreqMap.get(key)
  const newFreq = oldFreq + 1

  this._keyToFreqMap.set(key, newFreq)

  this._freqToKeysMap.get(oldFreq).delete(key)

  if (!this._freqToKeysMap.get(oldFreq).size) {
    this._freqToKeysMap.delete(oldFreq)
    // !
    if (this._minFreq === oldFreq) {
      this._minFreq++
    }
  }

  if (!this._freqToKeysMap.has(newFreq)) {
    this._freqToKeysMap.set(newFreq, new Set())
  }
  this._freqToKeysMap.get(newFreq).add(key)
}

LFUCache.prototype.get = function(key) {
  if (this._keyToValMap.get(key) == undefined) {
    return -1
  }
  // update fre
  this._increaseFreByKey(key)
  // return val
  return this._keyToValMap.get(key)
}

LFUCache.prototype._deleteLeastFreqKey = function() {
  // find the least frequently used key
  const minFreqSet = this._freqToKeysMap.get(this._minFreq)
  const keyToRemove = minFreqSet.keys().next().value

  minFreqSet.delete(keyToRemove)

  this._keyToValMap.delete(keyToRemove)

  this._keyToFreqMap.delete(keyToRemove)

  // update size
  this._size--
}

LFUCache.prototype.put = function(key, value) {
  /*
   if over capacity?
      delete the least frequestly used val
   if key exsit
      update val
      update freq
    insert val
    update freq
  */

  // !
  if (this._capacity == 0) return

  if (this._keyToFreqMap.has(key)) {
    this._keyToValMap.set(key, value)
    this._increaseFreByKey(key)
    return
  }

  if (this._size === this._capacity) {
    this._deleteLeastFreqKey()
  }

  this._keyToValMap.set(key, value)
  this._keyToFreqMap.set(key, 1)
  if (!this._freqToKeysMap.get(1)) {
    this._freqToKeysMap.set(1, new Set())
  }
  this._freqToKeysMap.get(1).add(key)
  this._minFreq = 1
  this._size++
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

// const lfu = new LFUCache(2)
// lfu.put(1, 1)
// lfu.put(2, 2)
// lfu.get(1)
// lfu.put(3, 3)
// const res1 = lfu.get(2)
// console.log('res1', res1) // -1
// lfu.get(3)
// lfu.put(4, 4)
// const res = lfu.get(1) // -1
// console.log('res', res)

module.exports = { LFUCache }

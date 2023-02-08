/*
 * Leetcode 460
 * 1. remove the corresponding key when get(key) is called
 * 2. increase fre of key when get(key) or put(key,val) is called
 * 3. remove  key of the least frequently used, if multiple key has the same fre, then delete the oldest
 */

class LFUCache {
  constructor(capacity) {
    this._keyToValMap = new Map()
    this._keyToFreqMap = new Map()
    // multiple keys might have the same freq, each key of map contains an ordered Set
    this._freqToKeysMap = new Map()
    this._minFreq = 0
    this._size = 0
    this._capacity = capacity
  }
  // increaseFreq of existing key
  _increaseFreqOfkey(key) {
    const oldFreq = this._keyToFreqMap.get(key)
    const newFreq = oldFreq + 1
    // update keyToFreqMap
    this._keyToFreqMap.set(key, newFreq)
    // update freqToKeysMap
    // delete old
    this._freqToKeysMap.get(oldFreq).delete(key)
    // update new
    if (!this._freqToKeysMap.get(newFreq)) {
      this._freqToKeysMap.set(newFreq, new Set())
    }
    this._freqToKeysMap.get(newFreq).add(key)
  }
  _removeLeastFreqOfKey() {
    // consider: which key to delete?
    const minFreSet = this._freqToKeysMap.get(this._minFreq)
    // get first Element of set: https://learnshareit.com/how-to-get-the-first-element-of-a-set-in-javascript
    const KeyToDel = minFreSet.keys().next().value

    // update freqToKeysMap
    minFreSet.delete(KeyToDel)
    if (!minFreSet.size) {
      this._freqToKeysMap.delete(this._minFreq)
    }
    // update keyToValMap
    this._keyToValMap.delete(KeyToDel)
    // update keyToFreqMap
    this._keyToFreqMap.delete(KeyToDel)

    this._size--
  }
  get(key) {
    if (!this._keyToValMap.has(key)) {
      return -1
    }
    this._increaseFreqOfkey(key)
    return this._keyToFreqMap.get(key)
  }
  set(key, val) {
    // key is existed
    if (this._keyToValMap.get(key)) {
      this._keyToFreqMap.set(key, val)
      this._increaseFreqOfkey(key)
      return
    }

    if (this._size === this._capacity) {
      this._removeLeastFreqOfKey()
    }
    // update keyToValMap
    this._keyToValMap.set(key, val)

    // update keyToFreqMap, new inserted val have frequency of 1
    this._keyToFreqMap.set(key, 1)

    // update freqToKeysMap
    if (!this._freqToKeysMap.get(1)) {
      this._freqToKeysMap.set(1, new Set())
    }
    this._freqToKeysMap.get(1).add(key)
    this._minFreq = 1
    this._size++
  }
}

const lfu = new LFUCache(2)
lfu.set(1, 10)
lfu.set(2, 20)
lfu.get(1)
lfu.set(3, 30)
lfu.get(2)

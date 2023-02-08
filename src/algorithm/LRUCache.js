// leetcode 146
// more specific implementation: https://github.com/rsms/js-lru/blob/master/test.js

/*
 * Least recently used
 * Design points:
 * 1. cache must be in order, cuz we need to delete the least recently used element
 * 2. we need to lookup certain keys and get their corresponding value
 * 3. every time we look up certain keys in the cache, we need to change it to `recently used`,
 *    which means we should be able to insert and del value in any position
 */

class Node {
  constructor(k, v) {
    this.key = k
    this.val = v
  }
}

class DoubleLinkedList {
  constructor() {
    this._head = new Node(0, 0)
    this._tail = new Node(0, 0)
    this._head.next = this._tail
    this._tail.prev = this._head
    this._size = 0
  }
  addToTail(x) {
    //                  x
    // head -> ..k.. ->   -> tail
    x.prev = this._tail.prev
    x.next = this._tail
    this._tail.prev.next = x
    this._tail.prev = x
    this._size++
  }
  remove(x) {
    x.prev.next = x.next
    x.next.prev = x.prev
    this._size--
  }
  removeFirst() {
    if (this._head.next == this._tail) {
      return null
    }
    const first = this._head.next
    this.remove(first)
    return first
  }
  get size() {
    return this._size
  }
}

class LRUCache {
  constructor(capacity) {
    this._capacity = capacity
    this._map = new Map()
    this._cache = new DoubleLinkedList()
  }
  _makeRecently(key) {
    const x = this._map.get(key)
    this._cache.remove(x)
    this._cache.addToTail(x)
  }
  _addLeastRecently(key, val) {
    const x = new Node(key, val)
    this._cache.addToTail(x)
    this._map.set(key, x)
  }
  _deleteKey(key) {
    const x = this._map.get(key)
    this._cache.remove(x)
    this._map.delete(key)
  }
  _removeLeastRecently() {
    const deletedNode = this._cache.removeFirst()
    const deletedKey = deletedNode.key
    this._map.delete(deletedKey)
  }
  get(key) {
    if (!this._map.get(key)) {
      return -1
    }
    this._makeRecently(key)
    // console.log(this._cache)
    return this._map.get(key)
  }
  put(key, val) {
    if (this._map.get(key)) {
      this._deleteKey(key)
      this._addRecently(key, val)
      return
    }
    if (this._cache.size === this._capacity) {
      this._removeLeastRecently()
    }
    this._addLeastRecently(key, val)
    // console.log(this._cache)
  }
}

const cache = new LRUCache(2)

console.log('----put(1, 1)------')
cache.put(1, 1)
console.log('----put(2, 2)------')
cache.put(2, 2)
console.log('----get(1)------')
cache.get(1)
console.log('-----put(3, 3)-----')
cache.put(3, 3)
console.log('----get(2)------')
cache.get(2)
console.log('----put(4, 4)------')
cache.put(4, 4)

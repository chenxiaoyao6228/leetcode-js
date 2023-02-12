/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
class Node {
  constructor(key, val) {
    this.key = key
    this.val = val
    this.next = null
    this.prev = null
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
  removeHead() {
    if (this._head.next == this._tail) {
      return
    }
    const _head = this._head.next
    this.remove(_head)
    return _head
  }
  addToTail(node) {
    const prev = this._tail.prev
    prev.next = node
    node.next = this._tail
    this._tail.prev = node
    node.prev = prev
    this._size++
  }
  remove(node) {
    node.prev.next = node.next
    node.next.prev = node.prev
    this._size--
  }
  get size() {
    return this._size
  }
}

class LRUCache {
  constructor(capacity) {
    this._capacity = capacity
    this._map = new Map() // for return val in O(1)
    this._dbListCache = new DoubleLinkedList() // for add and remove ele in O(1)
  }
  _makeRecently(key) {
    const node = this._map.get(key)
    this._dbListCache.remove(node)
    this._dbListCache.addToTail(node)
  }
  _addRecently(key, val) {
    const node = new Node(key, val)
    this._map.set(key, node)
    this._dbListCache.addToTail(node)
  }
  _deleteKey(key) {
    const node = this._map.get(key)
    this._map.delete(key)
    this._dbListCache.remove(node)
  }
  _removeLeastRecently(key, val) {
    const node = this._dbListCache.removeHead()
    this._map.delete(node.key)
    return node
  }
  get _size() {
    return this._dbListCache.size
  }
  get(key) {
    if (!this._map.has(key)) {
      return -1
    }
    // make recently
    this._makeRecently(key)
    // return val
    return this._map.get(key).val
  }

  put(key, value) {
    /* if key is existed
         delete key in map
         addRecently
       insert new key
          if over capacity
              delete the oldest
          insert
    */
    if (this._map.get(key)) {
      this._deleteKey(key)
      this._addRecently(key, value)
      return
    }
    if (this._size === this._capacity) {
      this._removeLeastRecently()
    }
    this._addRecently(key, value)
  }
}

// @lc code=end

module.exports = { LRUCache }

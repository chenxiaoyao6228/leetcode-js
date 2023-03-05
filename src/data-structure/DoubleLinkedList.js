/*
 * https://en.wikipedia.org/wiki/Doubly_linked_list
 * https://www.quora.com/In-a-doubly-linked-list-are-the-head-and-tail-nodes-also-referred-to-as-Sentinel-nodes-or-do-they-point-to-Sentinel-nodes-null
 */

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

export default DoubleLinkedList

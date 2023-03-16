class Heap {
  constructor() {
    this._heap = [null]
  }
  insert(element) {
    this._heap.push(element)
    this._swim(this._heap.length - 1)
  }
  poll() {
    let top = this._heap[1]
    // to avoid holes in the array, so we move swap the the first(greateset) element and last
    this._swap(1, this._heap.length - 1)
    // remove the last
    this._heap.pop()
    // heapify
    this._sink(1)
    return top
  }
  isEmpty() {
    return this._heap.length === 1
  }
  _swim(childIdx) {
    while (childIdx > 1 && this._compare(Math.floor(childIdx / 2), childIdx)) {
      let parentIdx = Math.floor(childIdx / 2)
      this._swap(parentIdx, childIdx)
      childIdx = parentIdx
    }
  }
  _sink(parentIndex) {
    while (2 * parentIndex < this._heap.length - 1) {
      // get the value of the next depth of the heap
      let childIdx = 2 * parentIndex

      if (
        childIdx < this._heap.length &&
        this._compare(childIdx, childIdx + 1)
      ) {
        childIdx++
      }
      // can not move down any more
      if (!this._compare(parentIndex, childIdx)) break
      this._swap(parentIndex, childIdx)
      parentIndex = childIdx
    }
  }
  _compare(a, b) {
    return this._comparator(this._heap[a], this._heap[b])
  }
  _comparator() {
    throw new Error('should overright this method')
  }
  _swap(a, b) {
    let temp = this._heap[a]
    this._heap[a] = this._heap[b]
    this._heap[b] = temp
  }
}

class MaxHeap extends Heap {
  _comparator(a, b) {
    return a < b
  }
}
class MinHeap extends Heap {
  _comparator(a, b) {
    return a > b
  }
}

module.exports = { MinHeap, MaxHeap }

export class Heap {
  constructor(comparator) {
    this._heap = [null]
    this._comparator = comparator
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
  _swim(k) {
    while (k > 1 && this._compare(Math.floor(k / 2), k)) {
      let i = Math.floor(k / 2)
      this._swap(i, k)
      k = i
    }
  }
  _sink(k) {
    while (2 * k < this._heap.length - 1) {
      let j = 2 * k
      if (j < this._heap.length && this._compare(j, j + 1)) {
        j++
      }
      // can not move down any more
      if (!this._compare(k, j)) break
      this._swap(k, j)
      k = j
    }
  }
  _compare(a, b) {
    return this._comparator(this._heap[a], this._heap[b])
  }
  _swap(a, b) {
    let temp = this._heap[a]
    this._heap[a] = this._heap[b]
    this._heap[b] = temp
  }
}

export class MaxHeap {
  constructor() {
    this._heap = [null]
  }
  insert(n) {
    this._heap.push(n)
    this.swim(this._heap.length - 1)
  }
  swim(k) {
    let i
    while (k > 1 && this.less(Math.floor(k / 2), k)) {
      // moveUp
      i = Math.floor(k / 2)
      if (this._heap[i] < this._heap[k]) {
        this.swap(i, k)
      }
      k = i
    }
  }
  delMax() {
    let max = this._heap[1]
    // to avoid holes in the array, so we move swap the the first(greateset) element and last
    this.swap(1, this._heap.length - 1)
    // remove the last
    this._heap.pop()
    // heapify
    this.sink(1)
    return max
  }
  sink(k) {
    while (2 * k < this._heap.length - 1) {
      let j = 2 * k
      if (j < this._heap.length && this.less(j, j + 1)) j++
      if (!this.less(k, j)) break
      this.swap(k, j)
      k = j
    }
  }
  less(a, b) {
    return this._heap[a] < this._heap[b]
  }
  swap(a, b) {
    let temp = this._heap[a]
    this._heap[a] = this._heap[b]
    this._heap[b] = temp
  }
}

class MonotonicQueue {
  constructor(nums) {
    this._queue = []
  }
  // add element n to the tail of the queue
  push(n) {
    // eg: [5,3,2,1] <- 4, imaging the new 4 crashing all the left element
    while (this._queue.length && this._queue[this._queue.length - 1] < n) {
      this._queue.pop()
    }
    this._queue.push(n)
  }
  // if the head of queue is n, then delete it
  shift(n) {
    if (n == this._queue[0]) {
      this._queue.shift()
    }
  }
  // return the max element in the queue
  max() {
    return this._queue[0]
  }
  min() {}

  get length() {
    return this._queue.length
  }
}

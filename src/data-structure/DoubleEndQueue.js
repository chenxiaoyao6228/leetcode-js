/*
 * Double-ended queue: https://en.wikipedia.org/wiki/Double-ended_queue
 * JavaScript has native support for deque operations via its Array class/prototype: push, pop, shift, unshift.
 * For more efficient implementation, see https://www.npmjs.com/package/double-ended-queue
 */

class Deque {
  constructor() {
    this._dataSource = []
  }
  push(element) {
    this._dataSource.push(element)
  }
  pop() {
    this._dataSource.pop()
  }
  shift() {
    this._dataSource.shift()
  }
  unshift(element) {
    this._dataSource.unshift(element)
  }
  front() {
    return this._dataStore[0]
  }
  back() {
    return this._dataStore[this._dataStore.length - 1]
  }
  empty() {
    this._dataSource = []
  }
  isEmpty() {
    return this._dataStore.length === 0
  }
}

export default Deque

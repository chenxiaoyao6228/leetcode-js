class Queue {
  constructor() {
    this._dataStore = []
  }
  enqueue(element) {
    this._dataStore.push(element)
  }
  dequeue() {
    return this._dataStore.shift()
  }
  front() {
    return this._dataStore[0]
  }
  back() {
    return this._dataStore[this._dataStore.length - 1]
  }
  clear() {
    this._dataStore = []
  }
  isEmpty() {
    if (this._dataStore.length === 0) {
      return true
    } else {
      return false
    }
  }
  get length() {
    return this._dataStore.length
  }
}
export default Queue

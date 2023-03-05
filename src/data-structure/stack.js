class Stack {
  constructor() {
    this.dataStore = []
    this.top = 0
  }
  push(element) {
    this.dataStore[this.top++] = element
  }
  pop() {
    return this.dataStore[--this.top]
  }
  peek() {
    return this.dataStore[this.top - 1]
  }
  clear() {
    // no need to worry about the old val, any new val that comes in will overwrite the old one
    this.top = 0
  }
  get length() {
    return this.top
  }
}

export default Stack

# stack

The stack is known as a last-in, first-out (LIFO) data structure.

## Implementation

```js
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
```

### Usage

### 1. Simulating recursive processes using a stack

> 5! = 5 * 4 * 3 * 2 * 1 = 120

Here is a recursive function to compute the factorial of any number:
```js
function factorial(n) {
  if (n === 0) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}
```

```js
function fact(n) {
  var s = new Stack()
  while (n > 1) {
    s.push(n--)
  }
  var product = 1
  while (s.length() > 0) {
    product *= s.pop()
  }
  return product
}
console.log(factorial(5)) // displays 120 
console.log(fact(5)); // displays 120
```

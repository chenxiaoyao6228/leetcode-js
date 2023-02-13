function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export function hashKey(value) {
  let type = typeof value
  if ((type === 'object' && value !== null) || type === 'function') {
    if (!value.$$hashKey) {
      value.$$hashKey = '' + uuid()
    } else if (typeof value.$$hashKey === 'function') {
      value.$$hashKey = '' + value.$$hashKey.call(value)
    }
    return `${type}:${value.$$hashKey}`
  } else {
    return `${type}:${value}`
  }
}

export class HashMap {
  constructor() {}
  put(key, value) {
    this[hashKey(key)] = value
  }
  get(key) {
    return this[hashKey(key)]
  }
  remove(key) {
    let value = this[hashKey(key)]
    delete this[hashKey(key)]
    return value
  }
}

const { LRUCache } = require('./146.lru-缓存.js')

test('LRUCache1', () => {
  const lRUCache = new LRUCache(2)
  lRUCache.put(1, 1) // cache is {1=1}
  lRUCache.put(2, 2) // cache {1=1, 2=2}
  expect(lRUCache.get(1)).toEqual(1)
  lRUCache.put(3, 3) // remove 2, the cache is {1=1, 3=3}
  expect(lRUCache.get(2)).toEqual(-1)
  lRUCache.put(4, 4) // remove 1, the cache now is {4=4, 3=3}
  expect(lRUCache.get(1)).toEqual(-1)
  expect(lRUCache.get(3)).toEqual(3)
  expect(lRUCache.get(4)).toEqual(4)
})
test('LRUCache2', () => {
  const lRUCache = new LRUCache(2)
  lRUCache.put(2, 1) // cache is {1=1}
  lRUCache.put(2, 2) // cache {1=1, 2=2}
  expect(lRUCache.get(2)).toEqual(2)
  lRUCache.put(1, 1) // remove 2, the cache is {1=1, 3=3}
  lRUCache.put(4, 1) // remove 1, the cache now is {4=4, 3=3}
  expect(lRUCache.get(2)).toEqual(-1)
})

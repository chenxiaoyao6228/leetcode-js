const { LFUCache } = require('./460.lfu-缓存.js')
const { createBTFromArray } = require('./utils/bst')
const { createLinkedListFromArr } = require('./utils/linked-list')

test('LFUCache1', () => {
  const lfu = new LFUCache(1)
  lfu.put(0, 0)
  expect(lfu.get(0)).toEqual(0)
})

test('LFUCache2', () => {
  const lfu = new LFUCache(2)
  lfu.put(1, 1)
  lfu.put(2, 2)
  lfu.get(1)
  lfu.put(3, 3)
  const res1 = lfu.get(2)
  expect(res1).toEqual(-1)
  lfu.get(3)
  lfu.put(4, 4)
  const res2 = lfu.get(1)
  expect(res2).toEqual(-1)
})

import { hashKey, HashMap } from './HashMap'
describe('HashMap', () => {
  'use strict'
  describe('hashKey', () => {
    test('is undefined:undefined for undefined', () => {
      expect(hashKey(undefined)).toEqual('undefined:undefined')
    })
    test('is object:null for null', () => {
      expect(hashKey(null)).toEqual('object:null')
    })
    test('is boolean:true for true', () => {
      expect(hashKey(true)).toEqual('boolean:true')
    })
    test('is boolean:false for false', () => {
      expect(hashKey(false)).toEqual('boolean:false')
    })
    test('is number:42 for 42', () => {
      expect(hashKey(42)).toEqual('number:42')
    })
    test('is string:42 for "42"', () => {
      expect(hashKey('42')).toEqual('string:42')
    })
    test('is object:[unique id] for objects', () => {
      expect(hashKey({})).toMatch(/object:\S+$/)
    })
    test('is the same key when asked for the same object many times', () => {
      let obj = {}
      expect(hashKey(obj)).toEqual(hashKey(obj))
    })
    test('does not change when object value changes', () => {
      let obj = { a: 42 }
      let hash1 = hashKey(obj)
      obj.a = 43
      let hash2 = hashKey(obj)
      expect(hash1).toEqual(hash2)
    })
    test('is not the same for different objects even with the same value', () => {
      let obj1 = { a: 42 }
      let obj2 = { a: 42 }
      expect(hashKey(obj1)).not.toEqual(hashKey(obj2))
    })
    test('is function:[unique id] for functions', () => {
      let fn = function(a) {
        return a
      }
      expect(hashKey(fn)).toMatch(/^function:\S+$/)
    })
    test('is the same key when asked for the same function many times', () => {
      let fn = function() {}
      expect(hashKey(fn)).toEqual(hashKey(fn))
    })
    test('is not the same for different identical functions', () => {
      let fn1 = function() {
        return 42
      }
      let fn2 = function() {
        return 42
      }
      expect(hashKey(fn1)).not.toEqual(hashKey(fn2))
    })
    test('stores the hash key in the $$hashKey attribute', () => {
      let obj = { a: 42 }
      let hash = hashKey(obj)
      expect(obj.$$hashKey).toEqual(hash.match(/object:(\S+)$/)[1])
    })
    test('uses preassigned $$hashKey', () => {
      expect(hashKey({ $$hashKey: 42 })).toEqual('object:42')
    })
    test('supports a function $$hashKey', () => {
      expect(hashKey({ $$hashKey: () => 42 })).toEqual('object:42')
    })
    test('calls the function $$hashKey as a method with the correct this', () => {
      expect(
        hashKey({
          myKey: 42,
          $$hashKey: function() {
            return this.myKey
          }
        })
      ).toEqual('object:42')
    })
  })
  describe('HashMap', () => {
    test('supports put and get of primitives', () => {
      let map = new HashMap()
      map.put(42, 'fourty two')
      expect(map.get(42)).toEqual('fourty two')
    })
    test('supports put and get of objects with hashKey semantics', () => {
      let map = new HashMap()
      let obj = {}
      map.put(obj, 'my value')
      expect(map.get(obj)).toEqual('my value')
      expect(map.get({})).toBeUndefined()
    })
    test('supports remove', () => {
      let map = new HashMap()
      map.put(42, 'fourty two')
      map.remove(42)
      expect(map.get(42)).toBeUndefined()
    })
    test('returns value from remove', () => {
      let map = new HashMap()
      map.put(42, 'fourty two')
      expect(map.remove(42)).toEqual('fourty two')
    })
  })
})

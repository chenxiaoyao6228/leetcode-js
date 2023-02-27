const { minWindow } = require('./76.最小覆盖子串.js')

test('minWindow1', () => {
  expect(minWindow('ADOBECODEBANC', 'ABC')).toEqual('BANC')
})

test('minWindow2', () => {
  expect(minWindow('BANBC', 'ABC')).toEqual('ANBC')
})
test('minWindow3', () => {
  expect(minWindow('ADOBECODEBANC', 'ABCZ')).toEqual('')
})

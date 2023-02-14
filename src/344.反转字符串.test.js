const { reverseString } = require('./344.反转字符串.js')

test('reverseString1', () => {
  expect(reverseString(['h', 'e', 'l', 'l', 'o'])).toEqual([
    'o',
    'l',
    'l',
    'e',
    'h'
  ])
})

test('reverseString2', () => {
  expect(reverseString(['H', 'a', 'n', 'n', 'a', 'h'])).toEqual([
    'h',
    'a',
    'n',
    'n',
    'a',
    'H'
  ])
})

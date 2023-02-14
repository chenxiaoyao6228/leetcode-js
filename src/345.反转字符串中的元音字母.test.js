const { reverseVowels } = require('./345.反转字符串中的元音字母.js')

test('reverseVowels1', () => {
  expect(reverseVowels('hello')).toEqual('holle')
})

test('reverseVowels2', () => {
  expect(reverseVowels('leetcode')).toEqual('leotcede')
})

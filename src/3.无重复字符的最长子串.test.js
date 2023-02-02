const { lengthOfLongestSubstring } = require('./3.无重复字符的最长子串.js')
const { createBTFromArray } = require('./utils/bst')

test('lengthOfLongestSubstring1', () => {
  expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3)
})

test('lengthOfLongestSubstring2', () => {
  expect(lengthOfLongestSubstring('bbbbb')).toEqual(1)
})
test('lengthOfLongestSubstring3', () => {
  expect(lengthOfLongestSubstring('pwwkew')).toEqual(3)
})

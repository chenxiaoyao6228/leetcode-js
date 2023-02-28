const { findAnagrams } = require('./438.找到字符串中所有字母异位词.js')

test('findAnagrams1', () => {
  expect(findAnagrams('cbaebabacd', 'abc')).toEqual([0, 6])
})

test('findAnagrams2', () => {
  expect(findAnagrams('abab', 'ab')).toEqual([0, 1, 2])
})

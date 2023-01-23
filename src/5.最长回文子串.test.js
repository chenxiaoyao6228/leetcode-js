const { longestPalindrome } = require('./5.最长回文子串.js')

test('longestPalindrome', () => {
  const res = longestPalindrome('babad')
  expect(['bab', 'aba'].includes(res)).toEqual(true)
})
test('longestPalindrome', () => {
  expect(longestPalindrome('cbbd')).toEqual('bb')
})

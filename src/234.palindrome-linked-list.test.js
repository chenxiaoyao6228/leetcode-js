const { isPalindrome } = require('./234.palindrome-linked-list')
const { createList } = require('./utils/linked-list')

test('isPalindrome', () => {
  expect(isPalindrome(createList(1))).toEqual(true)
  expect(isPalindrome(createList(1, 1))).toEqual(true)
  expect(isPalindrome(createList(1, 2))).toEqual(false)
  expect(isPalindrome(createList(1, 2, 2, 1))).toEqual(true)
})

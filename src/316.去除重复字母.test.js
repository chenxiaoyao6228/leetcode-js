const { removeDuplicateLetters } = require('./316.去除重复字母.js')
const { createBTFromArray } = require('./utils/bst')

test('removeDuplicateLetters1', () => {
  expect(removeDuplicateLetters('bcabc')).toEqual('abc')
})

test('removeDuplicateLetters2', () => {
  expect(removeDuplicateLetters('cbacdcbc')).toEqual('acdb')
})

const { checkInclusion } = require('./567.字符串的排列.js')

test('checkInclusion1', () => {
  expect(checkInclusion('ab', 'eidbaooo')).toEqual(true)
})

test('checkInclusion2', () => {
  expect(checkInclusion('ab', 'boa')).toEqual(false)
})

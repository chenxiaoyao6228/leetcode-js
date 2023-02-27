const { checkInclusion } = require('./567.字符串的排列.js')

test.skip('checkInclusion1', () => {
  expect(checkInclusion('ab', 'eidbaooo')).toEqual(true)
})

test.skip('checkInclusion2', () => {
  expect(checkInclusion('ab', 'boa')).toEqual(false)
})

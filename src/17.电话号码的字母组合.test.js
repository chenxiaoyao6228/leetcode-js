const { letterCombinations } = require('./17.电话号码的字母组合.js')
const { createBTFromArray } = require('./utils/bst')

test('letterCombinations', () => {
  const res = letterCombinations('23')
  const expects = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
  expect(expects.every(exp => res.includes(exp))).toEqual(true)
})

// test('letterCombinations', () => {
//   expect(letterCombinations('')).toEqual([])
// })
// test('letterCombinations', () => {
//   expect(letterCombinations('2')).toEqual(['a', 'b', 'c'])
// })

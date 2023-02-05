const { minInsertions } = require('./1541.平衡括号字符串的最少插入次数.js')
const { createBTFromArray } = require('./utils/bst')

test('minInsertions1', () => {
  expect(minInsertions('(()))')).toEqual(1)
})

test('minInsertions2', () => {
  expect(minInsertions('())')).toEqual(0)
})
test('minInsertions3', () => {
  expect(minInsertions('))())(')).toEqual(3)
})
test('minInsertions4', () => {
  expect(minInsertions('((((((')).toEqual(12)
})
test('minInsertions5', () => {
  expect(minInsertions(')))))))')).toEqual(5)
})

const { dailyTemperatures } = require('./739.每日温度.js')
const { createBTFromArray } = require('./utils/bst')

test('dailyTemperatures1', () => {
  expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toEqual([
    1,
    1,
    4,
    2,
    1,
    1,
    0,
    0
  ])
})

test('dailyTemperatures2', () => {
  expect(dailyTemperatures([30, 40, 50, 60])).toEqual([1, 1, 1, 0])
})
test('dailyTemperatures3', () => {
  expect(dailyTemperatures([30, 60, 90])).toEqual([1, 1, 0])
})

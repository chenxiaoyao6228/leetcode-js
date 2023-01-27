const { canFinish } = require('./207.课程表.js')

test('canFinish', () => {
  expect(canFinish(2, [[1, 0]])).toEqual(true)
})

test('canFinish2', () => {
  expect(
    canFinish(2, [
      [1, 0],
      [0, 1]
    ])
  ).toEqual(false)
})
test('canFinish3', () => {
  expect(
    canFinish(20, [
      [0, 10],
      [3, 18],
      [5, 5],
      [6, 11],
      [11, 14],
      [13, 1],
      [15, 1],
      [17, 4]
    ])
  ).toEqual(false)
})

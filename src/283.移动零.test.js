const { moveZeroes } = require('./283.移动零.js')

describe('moveZeroes', () => {
  test('should return the correct array', () => {
    expect(moveZeroes([1, 0, 0, 3, 5])).toEqual([1, 3, 5, 0, 0])
  })
})

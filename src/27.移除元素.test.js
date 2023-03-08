const { removeElement } = require('./27.移除元素.js')

test('removeElement1', () => {
  expect(removeElement([3, 2, 2, 3], 3)).toEqual(2)
})

test('removeElement2', () => {
  expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toEqual(5)
})

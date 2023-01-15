const { exist } = require('./79.单词搜索.js')

test('exist', () => {
  expect(
    exist(
      [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E']
      ],
      'SEE'
    )
  ).toEqual(true)
})

test('exist', () => {
  expect(
    exist(
      [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E']
      ],
      'ABCB'
    )
  ).toEqual(false)
})
test('exist', () => {
  expect(
    exist(
      [
        ['a', 'a', 'a'],
        ['A', 'A', 'A'],
        ['a', 'a', 'a']
      ],
      'aAaaaAaaA'
    )
  ).toEqual(false)
})

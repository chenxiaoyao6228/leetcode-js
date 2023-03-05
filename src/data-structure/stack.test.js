import Stack from './stack'

test('Stack', () => {
  const s = new Stack()
  s.push(1)
  s.push(2)
  s.push(3)
  expect(s.length).toEqual(3)
  expect(s.peek()).toEqual(3)
  expect(s.pop()).toEqual(3)
  expect(s.peek()).toEqual(2)
  s.push(4)
  expect(s.peek()).toEqual(4)
  s.clear()
  expect(s.length).toEqual(0)
  expect(s.peek()).toEqual(undefined)
  s.push(5)
  expect(s.peek()).toEqual(5)
})

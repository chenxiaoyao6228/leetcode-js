import Queue from './Queue'

test('queue', () => {
  const q = new Queue()
  q.enqueue(1)
  q.enqueue(2)
  q.enqueue(3)
  expect(q.length).toEqual(3)
  expect(q.dequeue()).toEqual(1)
  expect(q.front()).toEqual(2)
  expect(q.back()).toEqual(3)
  q.clear()
  expect(q.isEmpty()).toEqual(true)
})

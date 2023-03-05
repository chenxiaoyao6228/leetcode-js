import { MonotonicDecreasingQueue } from './MonotonicQueue'

test('MonotonicDecreasingQueue', () => {
  const queue = new MonotonicDecreasingQueue()
  queue.push(6)
  queue.push(3)
  queue.push(2)
  queue.shift(6)
  expect(queue.length).toEqual(2)
  queue.push(5)
  expect(queue.max()).toEqual(5)
  expect(queue.length).toEqual(1)
  queue.push(1)
  queue.push(4)
  expect(queue.max()).toEqual(5)
  expect(queue.length).toEqual(2)
})

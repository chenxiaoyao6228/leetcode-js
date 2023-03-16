const { MinHeap, MaxHeap } = require('./Heap')

describe('MaxHeap', () => {
  let heap
  beforeEach(() => {
    heap = new MaxHeap()
  })
  afterEach(() => {
    heap = null
  })
  test('insert', () => {
    heap._heap = [null, 19, 18, 17, 16, 15, 14, 13]
    heap.insert(20)
    expect(heap._heap).toEqual([null, 20, 19, 17, 18, 15, 14, 13, 16])
  })
  test('poll', () => {
    heap._heap = [null, 20, 19, 17, 18, 15, 14, 13, 16]
    heap.poll()
    expect(heap._heap).toEqual([null, 19, 18, 17, 16, 15, 14, 13])
  })
})

describe('MinHeap', () => {
  let heap
  beforeEach(() => {
    heap = new MinHeap()
  })
  afterEach(() => {
    heap = null
  })
  test('insert', () => {
    heap._heap = [null, 14, 15, 16, 17, 18, 19]
    heap.insert(13)
    expect(heap._heap).toEqual([null, 13, 15, 14, 17, 18, 19, 16])
  })

  test.only('poll', () => {
    heap._heap = [null, 13, 15, 14, 17, 18, 19, 16]
    heap.poll()
    expect(heap._heap).toEqual([null, 14, 15, 16, 17, 18, 19])
  })
  test('poll2', () => {
    heap._heap = [null, 13, 14, 15]
    heap.poll()
    console.log('heap._heap', heap._heap)
    expect(heap._heap).toEqual([null, 14, 15])
    heap.poll()
    expect(heap._heap).toEqual([null, 15])
  })
})

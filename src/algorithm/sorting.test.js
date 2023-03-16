const { quickSort, mergeSort, heapSort } = require('./sorting')

describe('sorting', () => {
  test('quickSort', () => {
    const origin = [3, 4, 5, 1, 2]
    const result = [1, 2, 3, 4, 5]
    expect(quickSort(origin)).toEqual(result)
  })
})
test('mergeSort', () => {
  const origin = [3, 4, 5, 1, 2]
  const result = [1, 2, 3, 4, 5]
  mergeSort(origin)
  console.log('origin', origin)
  // expect(mergeSort(origin)).toEqual(result)
})

test('heapSort', () => {
  const origin = [3, 4, 5, 1, 2]
  const result = [1, 2, 3, 4, 5]
  expect(heapSort(origin)).toEqual(result)
})

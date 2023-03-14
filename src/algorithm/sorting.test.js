const { quickSort, mergeSort, heapSort } = require('./sorting')

describe('sorting', () => {
  test('quickSort', () => {
    const origin = [3, 4, 5, 1, 2]
    const result = [1, 2, 3, 4, 5]
    expect(quickSort(origin)).toEqual(result)
  })
})
test('mergeSort', () => {
  const origin2 = [3, 4, 5, 1, 2]
  const result2 = [1, 2, 3, 4, 5]
  console.log('mergeSort(origin2)', mergeSort(origin2))
  expect(mergeSort(origin2)).toEqual(result2)
})

test.only('heapSort', () => {
  const origin = [3, 4, 5, 1, 2]
  const result = [1, 2, 3, 4, 5]
  expect(heapSort(origin)).toEqual(result)
})

const { quickSort, mergeSort } = require('./sorting')

describe('sorting', () => {
  const origin1 = [3, 4, 5, 1, 2]
  const result1 = [1, 2, 3, 4, 5]
  test('quickSort', () => {
    expect(quickSort(origin1)).toEqual(result1)
  })
  test('mergeSort', () => {
    expect(mergeSort(origin1)).toEqual(result1)
  })
})

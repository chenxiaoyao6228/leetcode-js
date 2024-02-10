const { twoSum } = require('./1.两数之和.js')

describe('twoSum function', () => {
  test('should return an array wtesth the indices of the two numbers that add up to the target', () => {
    const nums = [2, 7, 11, 15]
    const target = 9
    expect(twoSum(nums, target)).toEqual([0, 1])
    const nums2 = [3, 4, 6, 10, 11]
    const target2 = 17
    expect(twoSum(nums2, target2)).toEqual([1, 3])
    const nums3 = [1, 2, 3, 4, 5, 6]
    const target3 = 7
    expect(twoSum(nums3, target3)).toEqual([1, 5])
  })

  test('should return undefined when no two numbers add up to the target', () => {
    const nums = [2, 7, 11, 15]
    const target = 14
    expect(twoSum(nums, target)).toBeUndefined()
    const nums2 = [3, 4, 6, 10, 11]
    const target2 = 20
    expect(twoSum(nums2, target2)).toBeUndefined()
    const nums3 = [1, 2, 3, 4, 5, 6]
    const target3 = 20
    expect(twoSum(nums3, target3)).toBeUndefined()
  })

  test('should return undefined when input array is empty', () => {
    const nums = []
    const target = 9
    expect(twoSum(nums, target)).toBeUndefined()
  })

  test('should return undefine when input array has only one element', () => {
    const nums = [5]
    const target = 5
    expect(twoSum(nums, target)).toBeUndefined()
  })
})

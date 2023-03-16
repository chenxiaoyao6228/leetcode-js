// https://github.com/hustcc/JS-Sorting-Algorithm

const quickSort = function(nums) {
  return quickSortHelper(nums, 0, nums.length - 1)

  function quickSortHelper(nums, l, r) {
    if (l < r) {
      const pivotIndex = partition(nums, l, r)
      quickSortHelper(nums, l, pivotIndex - 1)
      quickSortHelper(nums, pivotIndex + 1, r)
    }
    return nums
  }

  function partition(nums, left, right) {
    var pivot = left, // 设定基准值（pivot）
      index = pivot + 1
    for (var i = index; i <= right; i++) {
      if (nums[i] < nums[pivot]) {
        swap(nums, i, index)
        index++
      }
    }
    swap(nums, pivot, index - 1)
    return index - 1
  }

  function swap(nums, i, j) {
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }
}

// var mergeSort = function(arr) {
//   return mergeSortHelper(arr)

//   function mergeSortHelper(arr) {
//     let len = arr.length
//     if (len < 2) {
//       return arr
//     }
//     let mid = Math.floor(len / 2)
//     let leftMerge = mergeSort(arr.slice(0, mid))
//     let rightMerge = mergeSort(arr.slice(mid))
//     return mergeTwoSortedArr(leftMerge, rightMerge)
//   }
//   // merge two sorted array
//   function mergeTwoSortedArr(arr1, arr2) {
//     let result = []
//     while (arr1.length && arr2.length) {
//       if (arr1[0] > arr2[0]) {
//         result.push(arr2.shift())
//       } else {
//         result.push(arr1.shift())
//       }
//     }

//     while (arr1.length) {
//       result.push(arr1.shift())
//     }

//     while (arr2.length) {
//       result.push(arr2.shift())
//     }

//     return result
//   }
// }

// solution2
const mergeSort = function(nums) {
  let temp = []
  return mergeSortHelper(nums, 0, nums.length - 1)

  function mergeSortHelper(nums, lo, hi) {
    if (lo == hi) {
      return nums
    }
    const mid = lo + Math.floor((hi - lo) / 2)
    mergeSortHelper(nums, lo, mid)
    mergeSortHelper(nums, mid + 1, hi)
    merge(nums, lo, mid, hi)
    return nums
  }
  // use two pointer to merge two sorted array
  function merge(nums, lo, mid, hi) {
    for (let i = lo; i <= hi; i++) {
      temp[i] = nums[i]
    }

    let i = lo,
      j = mid + 1
    for (let p = lo; p <= hi; p++) {
      if (i === mid + 1) {
        nums[p] = temp[j++]
      } else if (j === hi + 1) {
        nums[p] === temp[i++]
      } else if (nums[i] > nums[j]) {
        nums[p] = temp[j++]
      } else {
        nums[p] = temp[i++]
      }
    }
  }
}

function heapSort(nums) {
  let n = nums.length
  buildHeap(nums)
  for (let i = n - 1; i > 0; i--) {
    swap(nums, 0, i)
    n--
    swim(nums, 0)
  }
  return nums

  function buildHeap(nums, i) {
    for (let i = Math.floor(n / 2); i >= 0; i--) {
      swim(nums, i)
    }
  }
  function swim(nums, i) {
    let left = 2 * i + 1,
      right = 2 * i + 2,
      largest = i

    if (left < n && nums[left] > nums[largest]) {
      largest = left
    }
    if (right < n && nums[right] > nums[largest]) {
      largest = right
    }
    if (largest !== i) {
      swap(nums, i, largest)
      swim(nums, largest)
    }
  }
  function swap(nums, i, j) {
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }
}

const origin = [3, 4, 5, 1, 2]
const result = [1, 2, 3, 4, 5]
console.log('heapSort(origin)', heapSort(origin))

module.exports = { quickSort, mergeSort, heapSort }

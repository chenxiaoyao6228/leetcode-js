// https://github.com/hustcc/JS-Sorting-Algorithm

// 快速排序的逻辑是,若要对 nums[lo..hi] 进行排序,我们先找一个分界点 p,通过交换元素使得nums[lo..p-1] 都小于等于 nums[p],且 nums[p+1..hi] 都大于 nums[p],然后递归地去nums[lo..p-1] 和 nums[p+1..hi] 中寻找新的分界点,最后整个数组就被排序了。
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

// 归并排序的逻辑,若要对 nums[lo..hi] 进行排序,我们先对 nums[lo..mid] 排序,再对nums[mid+1..hi] 排序,最后把这两个有序的子数组合并,整个数组就排好序了。
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
      return
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
  const n = nums.length
  buildHeap(nums, nums.length - 1, 1)
  let k = n
  while (k > 1) {
    swap(nums, 1, k)
    k--
    heapify(nums, k, 1)
  }
  return nums

  function buildHeap(nums, n) {
    for (let i = Math.floor(n / 2); i >= 1; i--) {
      heapify(nums, n, i)
    }
  }
  function heapify(nums, n, i) {
    while (true) {
      let maxPos = i
      if (i * 2 <= n && nums[i] < nums[i * 2]) {
        maxPos = i * 2 + 1
      }
      if (i * 2 + 1 <= n && nums[maxPos] < nums[i * 2 + 1]) {
        maxPos = i * 2 + 1
      }
      if (maxPos == i) {
        break
      }
      swap(nums, i, maxPos)
      i = maxPos
    }
  }
  function swap(nums, i, j) {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }
}

module.exports = { quickSort, mergeSort, heapSort }

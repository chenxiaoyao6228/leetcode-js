var merge = function(nums1, m, nums2, n) {
  // Iterate through all elements of ar2[] starting from the last element
  for (let i = n - 1; i >= 0; i--) {
    /* Find the smallest element greater than ar2[i]. Move all
               elements one position ahead till the smallest greater
               element is not found */
    let j,
      last = nums1[m - 1]
    for (j = m - 2; j >= 0 && nums1[j] > nums2[i]; j--) {
      nums1[j + 1] = nums1[j]
    }

    // If there was a greater element
    if (last > nums2[i]) {
      nums1[j + 1] = nums2[i]
      nums2[i] = last
    }
  }
}

const res = merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3) // [1, 2, 2, 3, 5, 6]

module.exports = { merge }

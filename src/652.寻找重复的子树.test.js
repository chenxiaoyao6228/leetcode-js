const { findDuplicateSubtrees } = require('./652.寻找重复的子树.js')
const { createBTFromArray, isSameTree } = require('./utils/bst')

function check(expects, res) {
  return expects.some(exp => {
    for (let i = 0; i < exp.length; i++) {
      if (isSameTree(res[i], exp[i])) {
        return false
      }
    }
    return true
  })
}
test('findDuplicateSubtrees1', () => {
  const res = findDuplicateSubtrees(
    createBTFromArray([1, 2, 3, 4, null, 2, 4, null, null, 4])
  )
  const expects = [
    [createBTFromArray([2, 4]), createBTFromArray([4])],
    [createBTFromArray([4]), createBTFromArray([2, 4])]
  ]
  expect(check(expects, res)).toEqual(true)
})

test('findDuplicateSubtrees2', () => {
  const res = findDuplicateSubtrees(
    createBTFromArray([2, 2, 2, 3, null, 3, null])
  )
  const expects = [
    [createBTFromArray([2, 3]), createBTFromArray([3])],
    [createBTFromArray([2]), createBTFromArray([2, 3])]
  ]
  expect(check(expects, res)).toEqual(true)
})

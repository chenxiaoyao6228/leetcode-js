const { connect } = require('./116.填充每个节点的下一个右侧节点指针.js')
const { createBTFromArray } = require('./utils/bst')
test('connect', () => {
  expect(connect(createBTFromArray([1, 2, 3, 4, 5, 6, 7]))).toEqual({
    left: {
      left: {
        left: null,
        next: {
          left: null,
          next: {
            left: null,
            next: { left: null, right: null, val: 7 },
            right: null,
            val: 6
          },
          right: null,
          val: 5
        },
        right: null,
        val: 4
      },
      next: {
        left: {
          left: null,
          next: { left: null, right: null, val: 7 },
          right: null,
          val: 6
        },
        next: {
          left: null,
          next: {
            left: null,
            next: {
              left: null,
              next: { left: null, right: null, val: 7 },
              right: null,
              val: 6
            },
            right: null,
            val: 5
          },
          right: null,
          val: 4
        },
        right: { left: null, right: null, val: 7 },
        val: 3
      },
      right: {
        left: null,
        next: {
          left: null,
          next: { left: null, right: null, val: 7 },
          right: null,
          val: 6
        },
        right: null,
        val: 5
      },
      val: 2
    },
    right: {
      left: {
        left: null,
        next: { left: null, right: null, val: 7 },
        right: null,
        val: 6
      },
      next: {
        left: null,
        next: {
          left: null,
          next: {
            left: null,
            next: { left: null, right: null, val: 7 },
            right: null,
            val: 6
          },
          right: null,
          val: 5
        },
        right: null,
        val: 4
      },
      right: { left: null, right: null, val: 7 },
      val: 3
    },
    val: 1
  })
})

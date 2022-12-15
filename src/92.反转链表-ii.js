/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

// const { createList } = require('./utils/linked-list')
// [1, 2, 3, | [4, 5, 6], 7, 8, 9]
var reverseBetween = function(head, left, right) {
  if (left == 1) {
    return reverseN(head, right) // reverse first N value!
  }
  head.next = reverseBetween(head.next, left - 1, right - 1)
  return head
}

let successor = null
function reverseN(head, n) {
  if (n == 1) {
    successor = head.next
    return head
  }
  const last = reverseN(head.next, n - 1)
  head.next.next = last
  head.next = successor
  return last
}

// const list = createList(1, 2, 3, 4, 5, 6, 7, 8, 9)
// const reversedList = reverseBetween(list, 3, 6)
// console.log('reversedList', reversedList)

// @lc code=end

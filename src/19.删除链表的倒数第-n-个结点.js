/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
var removeNthFromEnd = function(head, n) {
  // 💥: must use dummy head to avoid null pointer
  // try to remove dummy and you will see the error
  const dummy = new ListNode(-1)
  dummy.next = head

  // need to use n+1 since we take dummy head into account
  const nthNodeFromEnd = findNthNodeFromEnd(dummy, n + 1)

  nthNodeFromEnd.next = nthNodeFromEnd.next.next

  return dummy.next

  function findNthNodeFromEnd(head, n) {
    let slow = head
    let fast = head
    for (let i = 0; i < n; i++) {
      fast = fast.next
    }
    while (fast) {
      fast = fast.next
      slow = slow.next
    }

    return slow
  }
}

// @lc code=end

module.exports = { removeNthFromEnd }

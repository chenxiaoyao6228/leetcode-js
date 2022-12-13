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
  let dummy = new ListNode(-1)
  dummy.next = head
  // have to find (n+1)th node in reverse and break
  const x = findFromEnd(dummy, n + 1)
  x.next = x.next.next
  return dummy.next
}

function findFromEnd(head, k) {
  let p1 = head
  let p2 = head
  // p1 move k step in advance
  for (let i = 0; i < k; i++) {
    p1 = p1.next
  }
  while (p1) {
    p1 = p1.next
    p2 = p2.next
  }
  return p2
}
// @lc code=end

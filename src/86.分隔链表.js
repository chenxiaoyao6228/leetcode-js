/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

var partition = function(head, x) {
  let dummyS = new ListNode(-1)
  let dummyL = new ListNode(-1)
  let p1 = dummyS
  let p2 = dummyL
  let p = head
  while (p) {
    if (p.val < x) {
      p1.next = p
      p1 = p1.next
    } else {
      p2.next = p
      p2 = p2.next
    }
    // break origin link pointer
    let temp = p.next
    p.next = null
    p = temp
  }

  p1.next = dummyL.next

  return dummyS.next
}
// @lc code=end

module.exports = { partition }

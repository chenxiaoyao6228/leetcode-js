/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

var mergeTwoLists = function(list1, list2) {
  let dummy = new ListNode(-1)
  let p = dummy

  let p1 = list1
  let p2 = list2
  while (p1 && p2) {
    if (p1.val < p2.val) {
      p.next = p1
      p1 = p1.next
    } else {
      p.next = p2
      p2 = p2.next
    }
    p = p.next
  }
  if (p1) {
    p.next = p1
  }
  if (p2) {
    p.next = p2
  }

  console.log(JSON.stringify(dummy.next))

  return dummy.next
}
// @lc code=end

module.exports = { mergeTwoLists }

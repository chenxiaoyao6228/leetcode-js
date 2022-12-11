/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// solution1: come through a way to make two list react the same length
var getIntersectionNode = function(headA, headB) {
  let lenA = 0,
    lenB = 0
  for (let p1 = headA; p1 != null; p1 = p1.next) {
    lenA++
  }
  for (let p2 = headB; p2 != null; p2 = p2.next) {
    lenB++
  }
  let p1 = headA,
    p2 = headB
  // p1:             1 -> 2 -> |3| -> 4 -> 5
  // p2: -2 -> -1 -> 0 -> 1 -> |3| -> 4 -> 5
  // move the longest list so that two list at the same length
  if (lenA > lenB) {
    for (let i = 0; i < lenA - lenB; i++) {
      p1 = p1.next
    }
  } else {
    for (let i = 0; i < lenB - lenA; i++) {
      p2 = p2.next
    }
  }
  // since two list are the same length, so just move the forward at the same time
  // they will get intersection or reach the end( p1 == null )
  while (p1 != p2) {
    p1 = p1.next
    p2 = p2.next
  }
  return p1
  // todo
}
// @lc code=end

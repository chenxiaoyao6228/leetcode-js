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
  let l1 = list1,
    l2 = list2
  let dummyHead = new ListNode(-1)
  let p = dummyHead
  while (l1 && l2) {
    if (l1.val > l2.val) {
      p.next = l2 // connect
      l2 = l2.next // move poiner l2
    } else {
      p.next = l1
      l1 = l1.next
    }
    p = p.next
  }

  if (!l1) {
    p.next = l2
  }
  if (!l2) {
    p.next = l1
  }

  return dummyHead.next
}
// @lc code=end

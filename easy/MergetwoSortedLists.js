/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function mergeTwoLists(list1, list2) {
    const empty = new ListNode(0);
    let current = empty;
  
    while (list1 && list2) {
      if (list1.val <= list2.val) {
        current.next = list1;
        list1 = list1.next;
      } else {
        current.next = list2;
        list2 = list2.next;
      }
      current = current.next;
    }
  
    if (list1) {
      current.next = list1;
    } else {
      current.next = list2;
    }
  
  
    return empty.next;
  }
  
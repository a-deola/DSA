class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
// TC: O(n), SC: O(n)
function middleNode(head: ListNode | null): ListNode | null {
  let nodeArray: ListNode[] = [];
  let length = 0;
  while (head != null) {
    nodeArray.push(head);
    head = head.next;
    length++;
  }
  return nodeArray[Math.trunc(length / 2)];
}

// TC: O(n), SC: O(1)
function middleNodeOptimized(head: ListNode | null): ListNode | null {
  if (head === null) return null;
  let middle: ListNode = head;
  let end: ListNode = head;

  while (end != null && end.next != null) {
    middle = middle.next!;
    end = end.next.next!;
  }
  return middle;
}

function insertNodeAtPosition(head, data, position) {
  let node = head;

  for (let i = 0; i < position - 1; i++) {
    node = node.next;
  }

  let temp = node.next;
  node.next = { data: data, next: temp };
  console.dir(head)
  return head;
}
insertNodeAtPosition({ data: 16, next: { data: 13, next: { data: 7, next: null } } }, 1, 2)
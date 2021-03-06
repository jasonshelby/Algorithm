class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  print_list() {
    let temp = this;
    while (temp !== null) {
      process.stdout.write(`${temp.value} `);
      temp = temp.next;
    }
    console.log();
  }
}


function reverse(head) {
  let current = head,
    previous = null;
  while (current !== null) {
    // 临时存储下一个节点
    next = current.next;
    // 反向指针
    current.next = previous; // reverse the current node
    // 有点双指针的意思，两个指针都向后移动
    previous = current;
    current = next;
  }
  return previous;
}


const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);

process.stdout.write('Nodes of original LinkedList are: ');
head.print_list();
result = reverse(head);
process.stdout.write('Nodes of reversed LinkedList are: ');
result.print_list();
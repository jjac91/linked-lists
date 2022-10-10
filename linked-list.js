/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) this.head = newNode;

    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;

    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.head === null) {
      throw new Error("No values to pop");
    }
    if (this.head === this.tail) {
      let val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return val;
    }
    let current = this.head;
    while (current.next.next !== null) {
      current = current.next;
    }
    let final = current.next;
    this.next = null;
    this.tail = current;
    this.length -= 1;
    return final.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.head === null) {
      throw new Error("No values to shift");
    }
    if (this.head === this.tail) {
      let val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return val;
    }
    let current = this.head;
    this.head = current.next;
    this.length -= 1;
    return current.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (this.head === null) {
      throw new Error("No list to get");
    }
    if (idx + 1 > this.length) {
      throw new Error("Idx is not found in list");
    }
    let current = this.head;
    let count = 0;
    while (current !== null && count != idx) {
      count += 1;
      current = current.next;
    }
    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (this.head === null) {
      throw new Error("No list to get");
    }
    if (idx + 1 > this.length) {
      throw new Error("Idx is not found in list");
    }
    let current = this.head;
    let count = 0;
    while (count !== idx) {
      count += 1;
      current = current.next;
    }
    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (this.head === null) {
      let newNode = new Node(val);
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
    } else if (idx > this.length) {
      throw new Error("Idx is not found in list");
    } else if (idx === 0) {
      let newNode = new Node(val);
      newNode.next = this.head;
      this.head = newNode;
      this.length += 1;
    } else if (idx === this.length) {
      let newNode = new Node(val);
      let current = this.tail;
      this.tail = newNode;
      current.next = newNode;
      this.length += 1;
    } else {
      let current = this.head;
      let count = 0;
      while (count !== idx - 1) {
        count += 1;
        current = current.next;
      }
      let newNode = new Node(val);
      newNode.next = current.next;
      current.next = newNode;
      this.length += 1;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (this.head === null) {
      throw new Error("No list to get");
    }
    if (idx === 0) {
      let current = this.head;
      this.head = current.next;
      if (this.length < 2) this.tail = this.head;
      this.length -= 1;
      return current.val;
    }
    if (idx === this.length - 1) {
      let current = this.head;
      let count = 0;
      while (count !== idx - 1) {
        count += 1;
        current = current.next;
      }
      let val = current.next.val;
      this.tail = current;
      this.length -= 1;
      return val;
    }
    let current = this.head;
    let count = 0;
    while (count !== idx - 1) {
      count += 1;
      current = current.next;
    }
    let val = current.next.val;
    current.next = current.next.next;
    this.length -= 1;
    return val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if(this.length === 0){
      return 0
    }
    let sum = 0
    let current = this.head
    while(current.next !== null){
      sum += current.val
      current =current.next
    }
    sum += current.val
    return sum/this.length
  }
}

module.exports = LinkedList;

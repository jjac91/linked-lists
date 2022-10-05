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
      current = this.next;
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
      console.log("entering while loop");
      console.log(current.next)
      current = this.next;
      console.log("exiting while loop")
    }
    
    console.log(count)
    console.log(current,"before return")
    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {}

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {}

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {}

  /** average(): return an average of all values in the list */

  average() {}
}

module.exports = LinkedList;

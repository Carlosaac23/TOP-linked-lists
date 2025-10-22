class Node {
  constructor(data, nextNode = null) {
    this.data = data;
    this.nextNode = nextNode;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add new node to the end
  append(value) {
    const newNode = new Node(value);
    let current = this.head;

    if (!current) {
      this.head = newNode;
      return;
    }

    while (current.nextNode) {
      current = current.nextNode;
    }

    current.nextNode = newNode;
  }

  // Add new node to the start
  prepend(value) {
    const newNode = new Node(value);

    newNode.nextNode = this.head;
    this.head = newNode;
  }

  // Return the size of the list
  size() {
    let current = this.head;
    let nodes = 0;

    while (current) {
      current = current.nextNode;
      nodes++;
    }

    return nodes;
  }

  // Return the first node in the list
  getHead() {
    return this.head;
  }

  // return the last node in the list
  getTail() {
    let current = this.head;

    if (!current) return null;

    while (current.nextNode) {
      current = current.nextNode;
    }

    return current;
  }

  // Return the node at the given index
  at(index) {
    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode) {
      if (currentIndex === index) {
        return currentNode;
      }

      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    return null;
  }
}

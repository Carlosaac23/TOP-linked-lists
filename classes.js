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
    let currentNode = this.head;

    if (!currentNode) {
      this.head = newNode;
      return;
    }

    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }

    currentNode.nextNode = newNode;
  }

  // Add new node to the start
  prepend(value) {
    const newNode = new Node(value);

    newNode.nextNode = this.head;
    this.head = newNode;
  }

  // Return the size of the list
  size() {
    let currentNode = this.head;
    let nodes = 0;

    while (currentNode) {
      currentNode = currentNode.nextNode;
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
    let currentNode = this.head;

    if (!currentNode) return null;

    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }

    return currentNode;
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

  // Remove the last node
  pop() {
    let currentNode = this.head;

    // If there is no node
    if (!currentNode) return null;

    // If there is only one node
    if (currentNode.nextNode === null) {
      this.head = null;
      return;
    }

    while (currentNode.nextNode && currentNode.nextNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }

    // "Delete" the last node
    currentNode.nextNode = null;
  }

  // Returns true if the passed in value is in the list and otherwise returns false
  contains(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.data === value) {
        return true;
      }

      currentNode = currentNode.nextNode;
    }

    return false;
  }

  // Returns the index of the node containing value, or null if not found
  find(value) {
    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode) {
      if (currentNode.data === value) {
        return currentIndex;
      }

      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    return null;
  }

  // Represents your LinkedList objects as strings, so you can print them out and preview them in the console.
  toString() {
    let currentNode = this.head;
    let result = '';

    while (currentNode) {
      result += `( ${currentNode.data} ) -> `;
      currentNode = currentNode.nextNode;
    }

    return result + 'null';
  }
}

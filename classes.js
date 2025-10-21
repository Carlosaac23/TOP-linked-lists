export class LinkedList {
  constructor(list = []) {
    this.list = list;
  }

  append(value) {
    this.list.push(value);
  }

  prepend(value) {
    this.list.unshift(value);
  }

  size() {
    this.list.length;
  }

  head() {
    this.list[0];
  }

  tail() {
    this.list[this.list.length - 1];
  }

  at(index) {
    this.list[index];
  }

  pop() {
    this.list.pop();
  }

  contains(value) {
    return this.list.find((node) => node === value);
  }

  find(value) {
    this.list.find((node, index) => {
      if (node === value) {
        return index;
      }

      return null;
    });
  }

  toString() {
    for (let i = 0; i < this.list.length; i++) {
      `( ${this.list[i]} ) ->`;
    }
  }
}

class Node {
  constructor(data, nextNode = null) {
    this.data = data;
    this.nextNode = nextNode;
  }
}

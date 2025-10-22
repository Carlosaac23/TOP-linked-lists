import { LinkedList } from './classes.js';

const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');
list.prepend('hamster');
list.prepend('snake');
list.prepend('turtle');

console.log('Size of the list: ', list.size());
console.log('First Node: ', list.getHead());
console.log('Last Node: ', list.getTail());
console.log('Node at index: ', list.at(4));

// Delete the last node
list.pop();
console.log('New last node: ', list.getTail());

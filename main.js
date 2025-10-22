import { LinkedList } from './classes.js';

const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');
list.prepend('hamster');
list.prepend('snake');
list.prepend('turtle');

console.log(list.size());
console.log('First: ', list.getHead());
console.log('Last: ', list.getTail());
console.log('At index: ', list.at(4));

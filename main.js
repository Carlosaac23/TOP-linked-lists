import { LinkedList } from './classes.js';

const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('carrot');
list.prepend('rabbit');

console.log(list.size());
console.log(list.getHead());

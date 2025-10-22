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

// Return true if the node data is the same as the value, not if there is not that data
console.log(list.contains('parrot')); // false
console.log(list.contains('cat')); // true

// Return the index of the node containing value
console.log('Snake its at the index: ', list.find('snake'));

// Show the whole list
console.log(list.toString());

// Insert new node at any index you want
list.insertAt('shark', 0);
console.log(list.toString()); // ( shark ) -> ( turtle ) -> ( snake ) -> ( hamster ) -> ( dog ) -> ( cat ) -> null

list.insertAt('dinosaur', 3);
console.log(list.toString()); // ( shark ) -> ( turtle ) -> ( snake ) -> ( dinosaur ) -> ( hamster ) -> ( dog ) -> ( cat ) -> null

// Remove node at any index you want
list.removeAt(3);
console.log(list.toString()); // ( shark ) -> ( turtle ) -> ( snake ) -> ( hamster ) -> ( dog ) -> ( cat ) -> null

list.removeAt(0);
console.log(list.toString()); // ( turtle ) -> ( snake ) -> ( hamster ) -> ( dog ) -> ( cat ) -> null

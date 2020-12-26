import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

console.log('\n####### NUMBER LIST SORTING');
console.log('# Original list: [100, 3, -5, 0, 99]');
const numbersColletion = new NumbersCollection([100, 3, -5, 0, 99]);
console.log('# Result:');
numbersColletion.sort();
console.log(numbersColletion.data);

// STRING SORTING
console.log('\n####### STRING SORTING');
console.log('# Original string: "MiguelRocha"');
const charCollection = new CharactersCollection('MiguelRocha');

console.log('# Result:');
charCollection.sort();
console.log(charCollection.data);

// LINKED LIST SORTTED
console.log('\n####### LINKED LIST SORTING');
console.log('# Original list: [500, -10, -3, 4]');

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

console.log('# Result:');
linkedList.sort();
linkedList.print();

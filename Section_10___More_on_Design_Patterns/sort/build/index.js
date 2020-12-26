"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
console.log('\n####### NUMBER LIST SORTING');
console.log('# Original list: [100, 3, -5, 0, 99]');
var numbersColletion = new NumbersCollection_1.NumbersCollection([100, 3, -5, 0, 99]);
console.log('# Result:');
numbersColletion.sort();
console.log(numbersColletion.data);
// STRING SORTING
console.log('\n####### STRING SORTING');
console.log('# Original string: "MiguelRocha"');
var charCollection = new CharactersCollection_1.CharactersCollection('MiguelRocha');
console.log('# Result:');
charCollection.sort();
console.log(charCollection.data);
// LINKED LIST SORTTED
console.log('\n####### LINKED LIST SORTING');
console.log('# Original list: [500, -10, -3, 4]');
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
console.log('# Result:');
linkedList.sort();
linkedList.print();

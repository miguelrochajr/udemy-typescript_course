import { User } from './User';

const user = new User({ name: 'Miguel', age: 27 });
user.set({ name: 'Maria Clara', age: 26 });

console.log(user.get('name'));
console.log(user.get('age'));

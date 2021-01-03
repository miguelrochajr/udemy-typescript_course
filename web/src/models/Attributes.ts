import { StringIndex, User, UserProps } from './User';

export class Attributes<T extends StringIndex> {
  constructor(private data: T) {}

  // in typesript, a string can be a type of itself. So, if we use
  // T as UserData, since a key of an Object is always a string, the
  // only possible types K are: "id", "name", "age"
  get = <K extends keyof T>(key: K): T[K] => {
    // K is one of the types of T
    // this method receives a key with type of K
    // this method returns something of the the type K in T
    return this.data[key];
  };

  set = (update: T): void => {
    Object.assign(this.data, update);
  };

  getAll = (): T => {
    return this.data;
  };
}

// Example
// const attrs = new Attributes<UserProps>({
//   id: 5,
//   name: 'mguel',
//   age: 27,
// });

// const name = attrs.get('name');

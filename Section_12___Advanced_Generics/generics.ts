class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

// type inference
const arrStrings = new ArrayOfAnything(['a', 'b', 'd', 'dj']);
// implicit type
const arr = new ArrayOfAnything<string>(['a', 'b', 'd', 'dj']);

// example of generic with functions
function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// explicity type
printAnything<string>(['a', 'b', 'c']);
// type inference
printAnything(['a', 'b', 'c']);

// ############################################################
// ############################################################
// Generic Constraints
class Car {
  print(): void {
    console.log('I am a car');
  }
}

class House {
  print(): void {
    console.log('I am a house');
  }
}

interface Printable {
  print(): void;
}

// Type T has all the functions the Printable interface has
function printHouseOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHouseOrCars<House>([new House(), new House()]);
printHouseOrCars<Car>([new Car(), new Car()]);

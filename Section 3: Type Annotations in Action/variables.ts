// type annotations
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes with type annotations
class Car {
  wheels: number;

  constructor(wheels: number) {
    this.wheels = wheels;
  }
}
let car: Car = new Car(4);

// Object literal. This is useful but you could make an interface
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

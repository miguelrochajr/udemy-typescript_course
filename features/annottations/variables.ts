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
class CarSmall {
  wheels: number;

  constructor(wheels: number) {
    this.wheels = wheels;
  }
}
let carSmall: CarSmall = new CarSmall(4);

// Object literal. This is useful but you could make an interface
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function.
// it really looks like Swift. Damn, Apple really did great in that language
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Fucntion that eturns the 'any' type
const json = '{"x": 10, "y": 10}';
// JSON.parse returns 'any'. See video 19 at 4"20'
// .parse can return different types depending on the input's type
const coordinats: { x: number; y: number } = JSON.parse(json);
console.log(coordinats);

// 2) When we declarea variable on one line
// and initalize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean; // is always best to initialize it first
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; // boolean OR number types

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

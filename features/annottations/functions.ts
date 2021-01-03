const add = (a: number, b: number): number => {
  return a + b;
};

// Type inference. Type script doesn't see return, inferes VOID
const subtract = (a: number, b: number) => {
  a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

//
const logger = (message: string): void => {
  console.log(message);
};

// Never type if a function never going reach the end of a function
const throwError = (message: string): never => {
  throw new Error(message);
};

// Destructing with functions
const todaysWeather = {
  date: new Date(),
  waather: 'sunny',
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

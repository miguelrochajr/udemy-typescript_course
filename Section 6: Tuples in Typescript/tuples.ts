const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number]; // type of a tuple

const coke = ['brown', true, 40]; // this is an array
const pepsi: Drink = ['brown', true, 40]; // this is a tuple
const sprite: Drink = ['clear', true, 40];
const sea: Drink = ['clear', false, 0];

const carSpects: [number, number] = [400, 3354];
const carStarts = {
  horsePower: 400,
  weight: 3345,
};

// A good use of tuples is for a HEADER of a csv file.

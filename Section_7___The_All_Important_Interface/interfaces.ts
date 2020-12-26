// interfaces are like Protocols in Swift
interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const soda = {
  color: 'brown',
  carbonated: 'true',
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar}`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(soda);

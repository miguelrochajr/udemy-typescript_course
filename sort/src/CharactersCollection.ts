import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter {
  data: string;

  constructor(data: string) {
    super();
    this.data = data;
  }

  // getter. This is a computed property
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    const leftChar = this.data[leftIndex].toLowerCase();
    const rightChar = this.data[rightIndex].toLowerCase();
    return leftChar > rightChar;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters: string[] = this.data.split('');
    const leftHand = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;
    this.data = characters.join('');
  }
}

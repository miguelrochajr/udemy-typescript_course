class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `This boats color ir ${this.color}`;
  }

  @testDecorator
  pilot(): void {
    console.log('swish');
  }
}

function testDecorator(target: any, key: string): void {
  console.log('Target:', target);
  console.log('Key: ', key);
}

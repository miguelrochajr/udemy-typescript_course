class Vehicle {
  constructor(public color: string) {}

  // a method without any modifier is inferred to be public
  protected honk(): void {
    console.log('Honk honk');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroooom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car: Car = new Car(4, 'purple');
car.startDrivingProcess();

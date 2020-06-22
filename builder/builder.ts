interface Builder {
  setSeats(number);
  setEngine(volume, petrol);
}

class CarBuilder implements Builder {
  private car: Car;

  constructor() {
    this.reset();
  }
  reset() {
    this.car = new Car();
  }
  setSeats(number) {
    this.car.seats = number;
  }
  setEngine(volume, petrol) {
    this.car.volume = volume;
    this.car.petrol = petrol;
  }
  getCar(): Car {
    const result = this.car;
    this.reset();
    return result;
  }
}

class Car {
  seats: number = 2;
  volume: number = 0;
  petrol: string = 'benzin';
}

class Director {
  private builder: Builder;

  setBuilder(builder: Builder) {
    this.builder = builder;
  }
  buildFullCar() {
    this.builder.setEngine(1.9, 'diesel');
    this.builder.setSeats(4);
  }
}

const director = new Director();
const builder = new CarBuilder();
director.setBuilder(builder);
director.buildFullCar();
console.log(builder.getCar());
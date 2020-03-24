abstract class Factory {
  shipment(): string {
    const transport = this.createDelivery();
    return 'Delivery by ' + transport.deliver();
  }
  abstract createDelivery(): Transport;
}

class TruckFactory extends Factory {
  createDelivery() {
    return new Truck();
  }
}

class ShipFactory extends Factory {
  createDelivery() {
    return new Ship();
  }
}

class CarFactory extends Factory {
  createDelivery() {
    return new Car();
  }
}

interface Transport {
  deliver(): string;
}

class Truck implements Transport {
  deliver(): string {
    return 'Truck';
  }
}

class Ship implements Transport {
  deliver(): string {
    return  'Ship';
  }
}

class Car implements Transport {
  deliver(): string {
    return  'Car';
  }
}

const transportFactory1 = new ShipFactory();
const transport1 = transportFactory1.shipment();
console.log(transport1);

const transportFactory2 = new CarFactory();
const transport2 = transportFactory2.shipment();
console.log(transport2);

// link
// https://refactoring.guru/uk/design-patterns/factory-method
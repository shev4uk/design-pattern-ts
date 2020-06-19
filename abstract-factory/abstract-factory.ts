interface Chair {
  hasLegs(): number;
}

class VictorianChair implements Chair {
  hasLegs() {
    return 4;
  }
}

interface FurnitureFactory {
  createChair(): Chair;
}

class VictorianFurnitureFactory implements FurnitureFactory {
  createChair() {
    return new VictorianChair()
  };
}

const factory = new VictorianFurnitureFactory();
const chair = factory.createChair();
console.log(chair.hasLegs());
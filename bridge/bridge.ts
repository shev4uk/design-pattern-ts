class Shape {
  protected color: Color;
  constructor(color: Color) {
    this.color = color;
  }
  drawShape() {
    return `Draw shape and ${this.color.paint()}`;
  }
}

class Circle extends Shape {
  drawShape() {
    return `Draw circle and ${this.color.paint()}`;
  }
}

interface Color {
  paint(): string;
}

class Red implements Color {
  paint() {
    return 'paint red color';
  }
}

let red = new Red();
let circle = new Circle(red);
console.log(circle.drawShape());

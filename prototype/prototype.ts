// class Shape {
//   color: string;
//   component: object;

//   clone() {
//     const clone = Object.create(this);
//     clone.component = Object.create(this.component);
//     return clone;
//   }
// }

// const shape = new Shape();
// shape.color = 'red';
// shape.component = new Date();
// const shape2 = shape.clone();
// console.log(shape, shape2, shape.color === shape2.color, shape.component === shape2.component);

class Shape {
  color: string;

  constructor(source) {
    this.color = source.color;
  }

  clone() {
    const clone = Object.create(this);
    return clone;
  }
}

class Rectangle extends Shape {

  width: number;
  height: number;

  constructor(source) {
    super(source);
    this.width = source.width;
    this.height = source.height;
  }

  clone() {
    return new Rectangle(this);
  }
}

const rect = new Rectangle({width: 20, height: 20, color: 'red'});
const rect2 = rect.clone();
console.log(rect, rect2, rect === rect2,rect.color === rect2.color);
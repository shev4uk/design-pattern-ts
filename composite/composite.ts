abstract class Component {
  protected parent: Component;

  public setParent(parent: Component) {
    this.parent = parent;
  }

  public getParent(): Component {
      return this.parent;
  }

  public add(component: Component): void { }

  public remove(component: Component): void { }

  public isComposite(): boolean {
    return false;
  }

  public abstract getPrice(): number;
}

class Product extends Component {
  constructor(public price: number) {
    super();
  }
  public getPrice(): number {
    return this.price;
  }
}

class Pack extends Component {
  protected children: Component[] = [];

  public add(component: Component): void {
    this.children.push(component);
    component.setParent(this);
  }

  public remove(component: Component): void {
      const componentIndex = this.children.indexOf(component);
      this.children.splice(componentIndex, 1);
      component.setParent(null);
  }

  public isComposite(): boolean {
      return true;
  }

  public getPrice(): number {
    let results = 0;
    for (const child of this.children) {
      results += child.getPrice();
    }
    return results;
  }
}

const tree = new Pack();
const branch1 = new Pack();
branch1.add(new Product(10));
branch1.add(new Product(20));
const branch2 = new Pack();
branch2.add(new Product(20));
tree.add(branch1);
tree.add(branch2);
console.log('Client: Now I\'ve got a composite tree:');
console.log(tree.getPrice());
class Facade {
  protected price: Currency;
  protected amount: Amount;

  constructor(price: Currency = null, amount: Amount = null) {
    this.price = price || new Currency();
    this.amount = amount || new Amount();
  }

  public result(): string {
    let total = `Total: ${this.price.exchange() * this.amount.suma()}`;
    return total;
  }
}

class Currency {
  public exchange(): number {
    return 27;
  }
}

class Amount {
  public suma(): number {
    return 30;
  }
}

const price = new Currency();
const amount = new Amount();
const facade = new Facade(price, amount);
console.log(facade.result());
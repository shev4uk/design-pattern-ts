interface Subject {
  attach(observer: Observer): void;

  detach(observer: Observer): void;

  notify(): void;
}

class MailSubject implements Subject {
  private observers: Observer[] = [];

  public attach(observer: Observer): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
        return console.log('Subject: Observer has been attached already.');
    }
    console.log('Subject: Attached an observer.');
    this.observers.push(observer);
  }

  public detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
        return console.log('Subject: Nonexistent observer.');
    }
    this.observers.splice(observerIndex, 1);
    console.log('Subject: Detached an observer.');
  }

  public notify() {
    console.log('Subject: Notifying observers...');
    for (const observer of this.observers) {
        observer.update(this);
    }
  }

  public newProduct() {
    console.log('newProduct');
    this.notify();
  }
}

interface Observer {
  update(subject: Subject): void;
}

class Store implements Observer {
  public update(subject: Subject) {
    if (subject instanceof Store) {
      console.log('Store: Reacted to the event.');
    }
  }
}

const subject = new MailSubject();

const observer1 = new Store();
subject.attach(observer1);

subject.newProduct();
subject.newProduct();

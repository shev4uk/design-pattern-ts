interface Command {
  execute(): void;
}

class SaveCommand implements Command {

  constructor(private receiver: Receiver) {}

  execute() {
    console.log(`Save setting using button`);
    this.receiver.requestToDB();
  }
}

class Receiver {
  requestToDB() {
    console.log(`request to database`);
  }
}

class Invoker {
  private onStart: Command;

  public setOnStart(command: Command): void {
    this.onStart = command;
  }

  public doSomethingImportant(): void {
    console.log('check');
    this.onStart.execute();
  }
}

const invoker = new Invoker();
const receiver = new Receiver();
invoker.setOnStart(new SaveCommand(receiver));

invoker.doSomethingImportant();
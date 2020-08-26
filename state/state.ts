class Context {
  private state: State;

  constructor(state: State) {
    this.changeState(state);
}

  public changeState(state: State) {
    this.state = state;
    this.state.setContext(this);
  }

  public render() {
    this.state.render();
  }

  public publish() {
    this.state.publish();
  }
}

abstract class State {
  protected context: Context;

  public setContext(context: Context) {
    this.context = context;
  }

  public abstract render(): void;

  public abstract publish(): void;
}

class Draft extends State {
  render() {
    console.log('draft can not render');
  }

  publish() {
    console.log('to state publish');
    this.context.changeState(new Publish());
  }
}

class Publish extends State {
  render() {
    console.log('show on page');
  }

  publish() {
    console.log('allready publish');
  }
}

const context = new Context(new Draft());
context.publish();
context.publish();

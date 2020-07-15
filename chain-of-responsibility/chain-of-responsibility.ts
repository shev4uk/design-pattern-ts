interface Handler {
  setNext(handler: Handler): Handler;

  handle(request: string): string;
}

abstract class AbstractHandler implements Handler {
  private nextHandler: Handler;

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(request: string): string {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }

    return null;
  }
}

class RequiredHandler extends AbstractHandler {
  public handle(request: string): string {
      if (request === '') {
          return `Field ${request} is required`;
      }
      return super.handle(request);

  }
}
class LonghHandler extends AbstractHandler {
  public handle(request: string): string {
      if (request.length > 3) {
          return `Field ${request} is long`;
      }
      return super.handle(request);

  }
}

class ShortHandler extends AbstractHandler {
  public handle(request: string): string {
      if (request.length < 3) {
          return `Field ${request} is short`;
      }
      return super.handle(request);

  }
}

const required = new RequiredHandler();
const short = new ShortHandler();
const long = new LonghHandler();
required.setNext(long).setNext(short);
const words = ['', 'we', 'Cup of coffee'];

for (const word of words) {
    console.log(`Check word ${word}?`);
    const result = required.handle(word);
    if (result) {
        console.log(`  ${result}`);
    } else {
        console.log(`  ${word} was failed.`);
    }
}
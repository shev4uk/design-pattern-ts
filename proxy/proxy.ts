interface Log {
  request(): void;
}

class Connector implements Log {
  public request(): void {
    console.log('Connector: Handling request.');
  }
}

class Proxy implements Log {
  private connector;
  constructor(connector: Connector) {
    this.connector = connector;
  }

  request():void {
    if (this.checkAccess()) {
      this.connector.request();
      this.logAccess();
    }
  }

  private checkAccess(): boolean {
    console.log('Proxy: Checking access prior to firing a real request.');
    return true;
  }

  private logAccess(): void {
      console.log('Proxy: Logging the time of request.');
  }
}

const connector = new Connector();
console.log(connector.request());

const proxy = new Proxy(connector);
console.log(proxy.request());
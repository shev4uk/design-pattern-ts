class Screwdriver {
  assignment() {
    return 'відкручувати шурупи';
  }
}

class SocketWrench {
  assignment() {
    return 'відкручувати болт'
  }
}

class Adapter extends Screwdriver {
  private socket: SocketWrench;
  
  constructor(socket: SocketWrench) {
    super();
    this.socket = socket;
  }

  adapterFromTo() {
    return `Адаптер ${this.socket.assignment()}`;
  }
}

const screw = new Screwdriver();
console.log(screw.assignment());

const socket = new SocketWrench();
console.log(socket.assignment());

const adapter = new Adapter(socket);
console.log(adapter.adapterFromTo());
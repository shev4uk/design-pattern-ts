interface Notifier {
  send(message: string): string;
}

class EmailNotifier implements Notifier {
  send(message) {
    return `Send email: ${message}`;
  }
}

class Decorator implements Notifier {
  protected note: Notifier
  constructor(note: Notifier) {
    this.note = note;
  }

  send(message) {
    return this.note.send(message);
  }
}

class SMSNotifier extends Decorator {
  send(message) {
    return `Send sms: ${super.send(message)}`;
  }
}

class FacebookNotifier extends Decorator {
  send(message) {
    return `Send Facebook: ${super.send(message)}`;
  }
}

const email = new EmailNotifier();
console.log(email.send('error'));

const sms = new SMSNotifier(email);
const facebook = new FacebookNotifier(sms);
console.log(facebook.send('error'));
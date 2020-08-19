interface Mediator {
  notify(sender: object, event: string): void;
}

class Dialog implements Mediator {

  constructor(
    private select: Select, 
    private checkbox: Checkbox,
    private text: TextBox) {
    this.select.setMediator(this);
    this.checkbox.setMediator(this);
    this.text.setMediator(this);
  }

  notify(sender: object, event: string): void {
    if (event === 'change') {
      console.log('event change');
    }
    if (event === 'check') {
      console.log('event check');
      this.text.showNote('form valide');
    }
  }
}

class BaseComponent {
  protected mediator: Mediator;

  constructor(mediator: Mediator = null) {
      this.mediator = mediator;
  }

  public setMediator(mediator: Mediator): void {
      this.mediator = mediator;
  }
}

class Select extends BaseComponent {
  changeLang() {
    console.log('Select change lang');
    this.mediator.notify(this, 'change');
  }
}

class Checkbox extends BaseComponent {
  agreeTerms() {
    console.log('agree terms');
    this.mediator.notify(this, 'check');
  }
}

class TextBox extends BaseComponent {
  showNote(text: string) {
    console.log(`show ${text}`);
  }
}

const select = new Select();
const check = new Checkbox()
const text = new TextBox();
const mediator = new Dialog(select, check, text);

select.changeLang();
check.agreeTerms();
abstract class DataMiner {
  templateMethod() {
    this.openFile();
    this.extractData();
    this.parseData();
    this.sendReport();
    this.closeFile();
  }

  protected openFile() {
    console.log('open File');
  }
  protected extractData() {
    console.log('extract Data');
  }
  protected parseData() {
    console.log('parse Data');
  }
  protected sendReport() {
    console.log('send Report');
  }
  protected closeFile() {
    console.log('close File');
  }

  protected abstract includeCoder(): void;
}

class PdfDataMiner extends DataMiner {
  includeCoder() {
    console.log('set coder');
  }
}

let data = new PdfDataMiner();
data.includeCoder();
data.templateMethod();
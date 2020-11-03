class Printer {
  private static Instance: Printer
  private constructor() {
    console.log('我是一台打印机')
  }
  public static getInstance() {
    if (!this.Instance) {
      console.log('初始化打印机')
      this.Instance = new Printer()
    }
    return this.Instance
  }
  public print() {
    console.log('打印中')
  }
}
let printer = Printer.getInstance()
printer = Printer.getInstance()
printer.print()

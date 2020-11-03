class Leader {
  private name: string = ''
  constructor(name: string) {
    this.name = name
    console.log(`${name}是一名首脑`)
  }
  public shopping() {
    const proxyObj = new ProxySecretary('B')
    proxyObj.proxyBehavior(this.name)
  }
}

class ProxySecretary {
  private name: string = ''
  constructor(name: string) {
    this.name = name
    console.log(`${name}是一名秘书`)
  }
  public proxyBehavior(targetName: string) {
    console.log(`${this.name}代替${targetName}去买饮料`)
  }
}
const leader = new Leader('A')
leader.shopping()

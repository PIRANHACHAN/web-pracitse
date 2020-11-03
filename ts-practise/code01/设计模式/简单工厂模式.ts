class Animal {
  private type: string = ''
  private name: string = ''
  constructor(type: string) {
    this.type = type
  }
  setName(name: string) {
    this.name = name
  }
  detail() {
    if (!this.name) {
      console.log('give name')
      return
    }
    console.log(`type:${this.type},name:${this.name}`)
  }
  public static getInstance(type: string) {
    return new Animal(type)
  }
}

let cat = Animal.getInstance('cat')
cat.setName('tom')
cat.detail()

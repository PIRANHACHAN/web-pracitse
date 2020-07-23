// 1.类 class
class City {
  // 成员变量
  cName: string
  cLevel: number

  // 构造函数
  constructor(name: string, level: number) {
    this.cName = name
    this.cLevel = level
  }

  // 成员方法
  about() {
    console.log(`欢迎来到${this.cName},此地危险系数为${this.cLevel}级！`)
  }
}

// 创建对象
let c1 = new City('广州', 5)
console.log(c1.cName)
c1.about()

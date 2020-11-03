// // 声明一个作者
// class Subject {
//   private observers: any[]
//   constructor() {
//     this.observers = []
//   }
//   /**
//    * 订阅事件
//    */
//   public on(observers: any[]) {
//     let that = this
//     console.log(observers)

//     observers.forEach((observer: any) => {
//       if (
//         that.observers.some((item) => {
//           item.name === observer.name
//         })
//       ) {
//         console.log(`${observer.name}已关注了作者`)
//       } else {
//         that.observers.push(observer)
//         console.log(`${observer.name}关注了作者`)
//       }
//     })
//   }

//   /**
//    * 发布事件
//    */
//   public publish(message: any) {
//     this.observers.forEach((item) => {
//       item.listener(message)
//     })
//   }
// }

// // 声明一个读者
// class Reader {
//   private name: string
//   constructor(name: string) {
//     this.name = name
//   }
//   public listener(message: any) {
//     console.log(`作者给读者${this.name}推送了一条消息，内容如下：${message}`)
//   }
// }

// const subject = new Subject()
// const readerA = new Reader('Tom')
// const readerB = new Reader('John')
// const readerC = new Reader('Mike')
// subject.on(readerA)
// subject.publish(`dddd`)

// 观察目标接口
interface Subject {
  addObserver: (observer: Observer) => void
  deleteObserver: (observer: Observer) => void
  notifyObservers: () => void
}

// 观察者接口
interface Observer {
  notify: () => void
}

// 具体观察目标类
class ConcreteSubject implements Subject {
  private observers: Observer[] = []

  // 添加观察者
  public addObserver(observer: Observer): void {
    console.log(observer, '添加订阅了')
    this.observers.push(observer)
  }

  // 移除观察者
  public deleteObserver(observer: Observer): void {
    console.log(observer, '移除订阅了')
    const idx: number = this.observers.indexOf(observer)
    ~idx && this.observers.splice(idx, 1)
  }

  // 通知观察者
  public notifyObservers(): void {
    console.log('通知观察者', this.observers)
    this.observers.forEach((observer) => {
      // 调用 notify 方法时可以携带指定参数
      observer.notify()
    })
  }
}

// 具体观察者类
class ConcreteObserver implements Observer {
  constructor(private name: string) {}
  public notify(): void {
    // 可以处理其他逻辑
    console.log(`${this.name}收到通知了,内容：`)
  }
}

// 测试代码
function useObserver() {
  const subject: Subject = new ConcreteSubject()
  const Leo = new ConcreteObserver('Leo')
  const Robin = new ConcreteObserver('Robin')
  const Pual = new ConcreteObserver('Pual')
  const Lisa = new ConcreteObserver('Lisa')

  subject.addObserver(Leo)
  subject.addObserver(Robin)
  subject.addObserver(Pual)
  subject.addObserver(Lisa)
  subject.notifyObservers()
  subject.deleteObserver(Pual)
  subject.deleteObserver(Lisa)
  subject.notifyObservers()
}
useObserver()

"use strict";
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
// 具体观察目标类
var ConcreteSubject = /** @class */ (function () {
    function ConcreteSubject() {
        this.observers = [];
    }
    // 添加观察者
    ConcreteSubject.prototype.addObserver = function (observer) {
        console.log(observer, '添加订阅了');
        this.observers.push(observer);
    };
    // 移除观察者
    ConcreteSubject.prototype.deleteObserver = function (observer) {
        console.log(observer, '移除订阅了');
        var idx = this.observers.indexOf(observer);
        ~idx && this.observers.splice(idx, 1);
    };
    // 通知观察者
    ConcreteSubject.prototype.notifyObservers = function () {
        console.log('通知观察者', this.observers);
        this.observers.forEach(function (observer) {
            // 调用 notify 方法时可以携带指定参数
            observer.notify();
        });
    };
    return ConcreteSubject;
}());
// 具体观察者类
var ConcreteObserver = /** @class */ (function () {
    function ConcreteObserver(name) {
        this.name = name;
    }
    ConcreteObserver.prototype.notify = function () {
        // 可以处理其他逻辑
        console.log(this.name + "\u6536\u5230\u901A\u77E5\u4E86,\u5185\u5BB9\uFF1A");
    };
    return ConcreteObserver;
}());
// 测试代码
function useObserver() {
    var subject = new ConcreteSubject();
    var Leo = new ConcreteObserver('Leo');
    var Robin = new ConcreteObserver('Robin');
    var Pual = new ConcreteObserver('Pual');
    var Lisa = new ConcreteObserver('Lisa');
    subject.addObserver(Leo);
    subject.addObserver(Robin);
    subject.addObserver(Pual);
    subject.addObserver(Lisa);
    subject.notifyObservers();
    subject.deleteObserver(Pual);
    subject.deleteObserver(Lisa);
    subject.notifyObservers();
}
useObserver();

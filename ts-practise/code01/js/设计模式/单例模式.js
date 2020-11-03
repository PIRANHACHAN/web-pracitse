"use strict";
var Printer = /** @class */ (function () {
    function Printer() {
        console.log('我是一台打印机');
    }
    Printer.getInstance = function () {
        if (!this.Instance) {
            console.log('初始化打印机');
            this.Instance = new Printer();
        }
        return this.Instance;
    };
    Printer.prototype.print = function () {
        console.log('打印中');
    };
    return Printer;
}());
var printer = Printer.getInstance();
printer = Printer.getInstance();
printer.print();

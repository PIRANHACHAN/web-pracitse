"use strict";
// 1.类 class
var City = /** @class */ (function () {
    // 构造函数
    function City(name, level) {
        this.cName = name;
        this.cLevel = level;
    }
    // 成员方法
    City.prototype.about = function () {
        console.log("\u6B22\u8FCE\u6765\u5230" + this.cName + ",\u6B64\u5730\u5371\u9669\u7CFB\u6570\u4E3A" + this.cLevel + "\u7EA7\uFF01");
    };
    return City;
}());
// 创建对象
var c1 = new City('广州', 5);
console.log(c1.cName);
c1.about();

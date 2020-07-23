"use strict";
/**
 * 0.函数必须定义返回值类型
 * 1.函数 返回值类型
 * function 函数名(): 返回值类型 { } // 如果函数没有返回值，则定义为void
 * let 变量名: 变量类型 = 函数名()
 * 2.函数 形参类型
 * function 函数名(形参1: 类型, 形参2: 类型): 返回值类型 { }
 * let 变量名: 变量类型 = 函数名(实参1,实参2)
 * 实参和形参的类型要一致
 * 实参和形参的数量要一致
 *
 */
function sayHi() {
    return 'hi old man';
}
var res1 = sayHi();
function jumpSan(cityName) {
    console.log("\u8DF3\u4F1E\u53BB" + cityName);
}
jumpSan('广州');
// 可选参数
function buyGun(gunName, count) {
    console.log("\u597D\u7528\u7684\u67AA" + gunName + ",\u9001\u4F60" + (count || 1) + "\u628A");
}
buyGun('M416');
// 参数默认值
function buyGun2(gunName, count) {
    if (gunName === void 0) { gunName = 'M416'; }
    if (count === void 0) { count = 1; }
    console.log("\u597D\u7528\u7684\u67AA" + gunName + ",\u9001\u4F60" + count + "\u628A");
}
buyGun2();
buyGun2('AK47');
buyGun2('AK47', 3);
buyGun2(undefined, 3);
// 剩余参数
function add(x, y) {
    var restOfNum = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        restOfNum[_i - 2] = arguments[_i];
    }
    // 创建一个求和变量
    var sum = x + y;
    // 使用for of遍历剩余参数，并累加到求和变量
    for (var _a = 0, restOfNum_1 = restOfNum; _a < restOfNum_1.length; _a++) {
        var rest = restOfNum_1[_a];
        sum += rest;
    }
    console.log(sum);
}
add(3, 3, 3, 3, 3, 3, 3, 3, 3, 3);

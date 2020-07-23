"use strict";
// 6.数组
// 7.元组（tuple）
// 定义
var tup1 = ['哈哈', 18, true];
// 赋值
tup1 = ['呵呵', 20, false];
// 8.枚举（enum）
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 1] = "Male";
    Gender[Gender["Female"] = 2] = "Female";
    Gender[Gender["Unknown"] = 3] = "Unknown";
})(Gender || (Gender = {}));
// 9.any类型
// 一般获取dom时使用
// 10.void类型，一般用在无返回值的函数中
// 11.never类型
// 代表不存在的值，常用作抛出异常或无限循环函数返回中
// 类型推断
// 如果变量的声明和初始化是同一行，可以省略掉变量类型的声明
// 联合类型
// 表示取值可以为多种类型中的一种
// let 变量名：变量类型1 | 变量类型2 = 值

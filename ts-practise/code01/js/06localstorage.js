"use strict";
var txtKeyObj = document.querySelector('#txtKey');
var txtValueObj = document.querySelector('#txtValue');
var btnAdd1 = document.querySelector('#btnAdd');
var btnRead = document.querySelector('#btnGet');
var btnDel = document.querySelector('#btnRemove');
var btnClear = document.querySelector('#btnClear');
var btnAddObj = document.querySelector('#btnAddObj');
var btnGetObj = document.querySelector('#btnGetObj');
// 保存数据
btnAdd1.onclick = function () {
    var strKey = txtKeyObj.value;
    var strValue = txtValueObj.value;
    // 保存到硬盘中
    localStorage.setItem(strKey, strValue);
    console.log("\u4FDD\u5B58\u6570\u636E\u4E3A\uFF1A" + strKey + "," + strValue);
};
// 取数据
btnRead.onclick = function () {
    var strKey = txtKeyObj.value;
    // 根据key取出value
    var strValue = localStorage.getItem(strKey);
    console.log("\u53D6\u51FA\u7684\u6570\u636E\u4E3A\uFF1A" + strValue);
};
// 删除数据
btnDel.onclick = function () {
    var strKey = txtKeyObj.value;
    // 根据key删除value
    localStorage.removeItem(strKey);
    console.log("\u5220\u9664\u7684\u6570\u636E\u4E3A\uFF1A" + strKey);
};
// 清空数据
btnClear.onclick = function () {
    localStorage.clear();
};
// 存对象
btnAddObj.onclick = function () {
    var dog = {
        name: '花花',
        age: 2,
        gender: false,
    };
    var strJson = JSON.stringify(dog);
    localStorage.setItem('myDog', strJson);
    console.log("\u4FDD\u5B58\u5BF9\u8C61\u5B57\u7B26\u4E32\u4E3A\uFF1A" + strJson);
};
// 读对象
btnGetObj.onclick = function () {
    var strJson = localStorage.getItem('myDog');
    var obj = JSON.parse(strJson);
    console.log(obj);
};

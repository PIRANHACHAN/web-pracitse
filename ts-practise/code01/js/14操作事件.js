"use strict";
var btn = document.querySelector('#btn');
function handleClickBtn(e) {
    console.log('btn被点击了');
}
btn.addEventListener('click', handleClickBtn);
function handleRemove() {
    var _a;
    (_a = document.getElementById('btn2')) === null || _a === void 0 ? void 0 : _a.removeEventListener('click', handleClickBtn);
}

"use strict";
var arr = [1, 1, 9, 6, 8];
console.log(arr.some(function (ele) {
    if (ele > 10) {
        return true;
    }
    return false;
}));

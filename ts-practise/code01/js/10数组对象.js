"use strict";
/* let songs: string[] = []

let len: number = songs.push('嗯哼')
 */
// for循环遍历数组
var nums = [11, 12, 9, 8, 6];
var ret = [];
var foo = nums.forEach(function (ele) {
    if (ele > 10) {
        ret.push(ele);
        console.log(ret);
    }
});

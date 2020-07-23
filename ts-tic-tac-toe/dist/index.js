"use strict";
var cells = document.querySelectorAll('.cell');
cells.forEach(function (item) {
    var cell = item;
    cell.addEventListener('click', handleCellClick, { once: true });
});
// 棋盘中单元格的callback函数
function handleCellClick(e) {
    var target = e.target;
    target.classList.add('x');
    // console.log(e.target)
}
// 切换玩家
var currentPlayer;

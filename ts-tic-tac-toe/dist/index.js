"use strict";
// 定义当前玩家
var Player;
(function (Player) {
    Player["X"] = "x";
    Player["O"] = "o";
})(Player || (Player = {}));
var currentPlayer = Player.X;
var cells = document.querySelectorAll('.cell');
// 获取游戏面板
var gameBoard = document.querySelector('#board');
cells.forEach(function (item) {
    var cell = item;
    cell.addEventListener('click', handleCellClick, { once: true });
});
// 棋盘中单元格的callback函数
function handleCellClick(e) {
    var target = e.target;
    target.classList.add(currentPlayer);
    // 调用判赢函数
    var isWin = judgeWin(currentPlayer);
    if (isWin) {
        console.log(currentPlayer + "\u83B7\u80DC\u4E86");
    }
    // 切换玩家
    currentPlayer = currentPlayer === Player.X ? Player.O : Player.X;
    gameBoard.classList.remove(Player.X, Player.O);
    gameBoard.classList.add(currentPlayer);
}
// 获胜的8种情况
var winsArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
// 判断是否获胜
function judgeWin(player) {
    return winsArr.some(function (ele) {
        if (cells[ele[0]].classList.contains(player) &&
            cells[ele[1]].classList.contains(player) &&
            cells[ele[2]].classList.contains(player)) {
            return true;
        }
        return false;
    });
}

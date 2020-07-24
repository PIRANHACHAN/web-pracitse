"use strict";
// 定义当前玩家
var Player;
(function (Player) {
    Player["X"] = "x";
    Player["O"] = "o";
})(Player || (Player = {}));
var currentPlayer;
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
// 单元格列表
var cells = document.querySelectorAll('.cell');
// 获取游戏面板
var gameBoard = document.querySelector('#board');
// 获胜信息面板
var gameMessage = document.querySelector('#message');
// 获胜者
var winner = document.querySelector('#winner');
// 记录下棋步数
var steps;
// 重新开始按钮
var restart = document.querySelector('#restart');
// 第一次游戏
startGame();
//重新开始游戏
restart.addEventListener('click', startGame);
// 初始化游戏界面
function startGame() {
    gameMessage.style.display = 'none';
    steps = 0;
    currentPlayer = Player.X;
    gameBoard.classList.remove(Player.X, Player.O);
    gameBoard.classList.add(Player.X);
    cells.forEach(function (ele) {
        var cell = ele;
        cell.classList.remove(Player.X, Player.O);
        cell.removeEventListener('click', handleCellClick);
        cell.addEventListener('click', handleCellClick, { once: true });
    });
}
// 棋盘中监听单元格单击事件的callback函数
function handleCellClick(e) {
    var target = e.target;
    target.classList.add(currentPlayer);
    // 每次下棋后步数加1
    steps++;
    // 调用判赢函数
    var isWin = judgeWin(currentPlayer);
    if (isWin) {
        gameMessage.style.display = 'block';
        winner.innerText = currentPlayer + " \u8D62\u4E86\uFF01";
        return;
    }
    // 判断平局
    if (steps === 9) {
        gameMessage.style.display = 'block';
        winner.innerText = '平局';
        return;
    }
    // 切换玩家
    currentPlayer = currentPlayer === Player.X ? Player.O : Player.X;
    gameBoard.classList.remove(Player.X, Player.O);
    gameBoard.classList.add(currentPlayer);
}
// 判断获胜情况(判赢函数)
function judgeWin(player) {
    return winsArr.some(function (ele) {
        if (hasClass(cells[ele[0]], player) &&
            hasClass(cells[ele[1]], player) &&
            hasClass(cells[ele[2]], player)) {
            return true;
        }
        return false;
    });
}
// 判断DOM元素是否包含某个类名
function hasClass(ele, className) {
    return ele.classList.contains(className);
}

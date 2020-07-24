// 定义当前玩家
enum Player {
  X = 'x',
  O = 'o',
}
let currentPlayer: Player
// 获胜的8种情况
const winsArr: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]
// 单元格列表
let cells = document.querySelectorAll('.cell')
// 获取游戏面板
let gameBoard = document.querySelector('#board') as HTMLDivElement
// 获胜信息面板
let gameMessage = document.querySelector('#message') as HTMLDivElement
// 获胜者
let winner = document.querySelector('#winner') as HTMLParagraphElement
// 记录下棋步数
let steps: number
// 重新开始按钮
let restart = document.querySelector('#restart') as HTMLButtonElement

// 第一次游戏
startGame()

//重新开始游戏
restart.addEventListener('click', startGame)

// 初始化游戏界面
function startGame(): void {
  gameMessage.style.display = 'none'
  steps = 0
  currentPlayer = Player.X
  gameBoard.classList.remove(Player.X, Player.O)
  gameBoard.classList.add(Player.X)

  cells.forEach((ele) => {
    let cell = ele as HTMLDivElement
    cell.classList.remove(Player.X, Player.O)
    cell.removeEventListener('click', handleCellClick)
    cell.addEventListener('click', handleCellClick, { once: true })
  })
}

// 棋盘中监听单元格单击事件的callback函数
function handleCellClick(e: MouseEvent): void {
  let target = e.target as HTMLDivElement
  target.classList.add(currentPlayer)

  // 每次下棋后步数加1
  steps++

  // 调用判赢函数
  let isWin = judgeWin(currentPlayer)
  if (isWin) {
    gameMessage.style.display = 'block'
    winner.innerText = `${currentPlayer} 赢了！`
    return
  }

  // 判断平局
  if (steps === 9) {
    gameMessage.style.display = 'block'
    winner.innerText = '平局'
    return
  }

  // 切换玩家
  currentPlayer = currentPlayer === Player.X ? Player.O : Player.X
  gameBoard.classList.remove(Player.X, Player.O)
  gameBoard.classList.add(currentPlayer)
}

// 判断获胜情况(判赢函数)
function judgeWin(player: Player): boolean {
  return winsArr.some((ele) => {
    if (
      hasClass(cells[ele[0]], player) &&
      hasClass(cells[ele[1]], player) &&
      hasClass(cells[ele[2]], player)
    ) {
      return true
    }
    return false
  })
}

// 判断DOM元素是否包含某个类名
function hasClass(ele: Element, className: string): boolean {
  return ele.classList.contains(className)
}

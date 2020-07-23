// 定义当前玩家
enum Player {
  X = 'x',
  O = 'o',
}
let currentPlayer: Player = Player.X

let cells = document.querySelectorAll('.cell')

// 获取游戏面板
let gameBoard = document.querySelector('#board') as HTMLDivElement

cells.forEach((item) => {
  let cell = item as HTMLDivElement
  cell.addEventListener('click', handleCellClick, { once: true })
})

// 棋盘中单元格的callback函数
function handleCellClick(e: MouseEvent): void {
  let target = e.target as HTMLDivElement
  target.classList.add(currentPlayer)

  // 调用判赢函数
  let isWin = judgeWin(currentPlayer)
  if (isWin) {
    console.log(`${currentPlayer}获胜了`)
  }

  // 切换玩家
  currentPlayer = currentPlayer === Player.X ? Player.O : Player.X
  gameBoard.classList.remove(Player.X, Player.O)
  gameBoard.classList.add(currentPlayer)
}

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

// 判断是否获胜
function judgeWin(player: Player): boolean {
  return winsArr.some((ele) => {
    if (
      cells[ele[0]].classList.contains(player) &&
      cells[ele[1]].classList.contains(player) &&
      cells[ele[2]].classList.contains(player)
    ) {
      return true
    }
    return false
  })
}

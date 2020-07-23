let cells = document.querySelectorAll('.cell')
cells.forEach((item) => {
  let cell = item as HTMLDivElement
  cell.addEventListener('click', handleCellClick, { once: true })
})

// 棋盘中单元格的callback函数
function handleCellClick(e: any): void {
  let target = e.target as HTMLDivElement
  target.classList.add('x')
  // console.log(e.target)
}

// 切换玩家
let currentPlayer

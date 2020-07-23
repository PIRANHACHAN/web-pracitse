let btn = document.querySelector('#btn') as HTMLButtonElement
function handleClickBtn(e: any): void {
  console.log('btn被点击了')
}
btn.addEventListener('click', handleClickBtn)

function handleRemove(): void {
  document.getElementById('btn2')?.removeEventListener('click', handleClickBtn)
}

const txtKeyObj: any = document.querySelector('#txtKey')
const txtValueObj: any = document.querySelector('#txtValue')
const btnAdd1: any = document.querySelector('#btnAdd')
const btnRead: any = document.querySelector('#btnGet')
const btnDel: any = document.querySelector('#btnRemove')
const btnClear: any = document.querySelector('#btnClear')

const btnAddObj: any = document.querySelector('#btnAddObj')
const btnGetObj: any = document.querySelector('#btnGetObj')

// 保存数据
btnAdd1.onclick = () => {
  const strKey = txtKeyObj.value
  const strValue = txtValueObj.value
  // 保存到硬盘中
  localStorage.setItem(strKey, strValue)

  console.log(`保存数据为：${strKey},${strValue}`)
}

// 取数据
btnRead.onclick = () => {
  const strKey = txtKeyObj.value
  // 根据key取出value
  let strValue = localStorage.getItem(strKey)
  console.log(`取出的数据为：${strValue}`)
}

// 删除数据
btnDel.onclick = () => {
  let strKey = txtKeyObj.value
  // 根据key删除value
  localStorage.removeItem(strKey)
  console.log(`删除的数据为：${strKey}`)
}

// 清空数据
btnClear.onclick = () => {
  localStorage.clear()
}

// 存对象
btnAddObj.onclick = () => {
  const dog: Object = {
    name: '花花',
    age: 2,
    gender: false,
  }
  const strJson: string = JSON.stringify(dog)
  localStorage.setItem('myDog', strJson)
  console.log(`保存对象字符串为：${strJson}`)
}

// 读对象
btnGetObj.onclick = () => {
  const strJson: string | null = localStorage.getItem('myDog')
  const obj = JSON.parse(strJson as string)
  console.log(obj)
}

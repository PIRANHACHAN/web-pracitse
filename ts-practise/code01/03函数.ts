/**
 * 0.函数必须定义返回值类型
 * 1.函数 返回值类型
 * function 函数名(): 返回值类型 { } // 如果函数没有返回值，则定义为void
 * let 变量名: 变量类型 = 函数名()
 * 2.函数 形参类型
 * function 函数名(形参1: 类型, 形参2: 类型): 返回值类型 { }
 * let 变量名: 变量类型 = 函数名(实参1,实参2)
 * 实参和形参的类型要一致
 * 实参和形参的数量要一致
 *
 */

function sayHi(): string {
  return 'hi old man'
}
let res1: string = sayHi()

function jumpSan(cityName: string): void {
  console.log(`跳伞去${cityName}`)
}
jumpSan('广州')

// 可选参数
function buyGun(gunName: string, count?: number): void {
  console.log(`好用的枪${gunName},送你${count || 1}把`)
}
buyGun('M416')

// 参数默认值
function buyGun2(gunName: string = 'M416', count: number = 1): void {
  console.log(`好用的枪${gunName},送你${count}把`)
}
buyGun2()
buyGun2('AK47')
buyGun2('AK47', 3)
buyGun2(undefined, 3)

// 剩余参数
function add(x: number, y: number, ...restOfNum: number[]): void {
  // 创建一个求和变量
  let sum: number = x + y
  // 使用for of遍历剩余参数，并累加到求和变量
  for (let rest of restOfNum) {
    sum += rest
  }
  console.log(sum)
}
add(3, 3, 3, 3, 3, 3, 3, 3, 3, 3)

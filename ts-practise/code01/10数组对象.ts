/* let songs: string[] = []

let len: number = songs.push('嗯哼')
 */
// for循环遍历数组
let nums: number[] = [11, 12, 9, 8, 6]
let ret: number[] = []
let foo = nums.forEach((ele) => {
  if (ele > 10) {
    ret.push(ele)
    console.log(ret)
  }
})

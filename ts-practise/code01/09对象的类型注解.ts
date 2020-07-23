interface IUser {
  name: string
  height: number
  sing(): void
}

let jay: IUser = {
  name: '周杰伦',
  height: 185,
  sing() {
    console.log('唱歌~~')
  },
}

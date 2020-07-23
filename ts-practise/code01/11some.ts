let arr: number[] = [1, 1, 9, 6, 8]
console.log(
  arr.some((ele) => {
    if (ele > 10) {
      return true
    }
    return false
  })
)

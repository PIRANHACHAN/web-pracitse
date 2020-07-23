class DataHelper {
  dataKey: string
  primaryKey: string

  constructor(dataKey: string, primaryKey: string) {
    this.dataKey = dataKey
    this.primaryKey = primaryKey
  }

  readData(): any {}
}

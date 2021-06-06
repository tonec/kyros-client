type Func = (...args: any) => any

export default<T> (key: keyof T): Func => {
  return item => item[key]
}

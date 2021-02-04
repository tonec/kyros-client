type Func = (...args: any) => any

export default (key: string | Func): Func | string => {
  return typeof key === 'function' ? key : item => item[key]
}

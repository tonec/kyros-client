export default v => {
  return typeof v === 'function' ? v : d => d[v]
}

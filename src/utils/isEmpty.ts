export default (value?: string | number | null): boolean => {
  return value === undefined || value === null || value === ''
}

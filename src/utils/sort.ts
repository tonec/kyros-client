type Item = { date: string }

export const dateSortAsc = (a: Item, b: Item): number =>
  new Date(a.date).getTime() - new Date(b.date).getTime()

export default null

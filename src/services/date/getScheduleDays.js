import addDays from 'date-fns/addDays'
import eachDay from 'date-fns/eachDayOfInterval'
import endOfMonth from 'date-fns/endOfMonth'
import startOfMonth from 'date-fns/startOfMonth'

export default timescale => {
  const now = new Date()

  switch (timescale) {
    case 'day':
      return [now]

    case 'week':
      return eachDay({
        start: now,
        end: addDays(now, 6),
      })

    case 'fortnight':
      return eachDay({
        start: now,
        end: addDays(now, 13),
      })

    case 'month':
      return eachDay({
        start: startOfMonth(now),
        end: endOfMonth(now),
      })

    default:
      return null
  }
}

import React from 'react'
import { useLink } from 'valuelink'
import { makeStyles } from 'styles'
import { TIMESCALES_OPTIONS } from 'utils/constants'
import { getScheduleDays } from 'services/date'
import { DatePicker, Select } from 'components'

const useStyles = makeStyles({
  control: {
    display: 'flex',
    flexDirection: 'row',
  },
})

function TimescaleControl() {
  const classes = useStyles()
  const $timescale = useLink('week')
  const $date = useLink()

  console.log('getScheduleDays', getScheduleDays($timescale.value))

  return (
    <div className={classes.control}>
      <Select $value={$timescale} options={TIMESCALES_OPTIONS} />
      <DatePicker $value={$date} margin="none" />
    </div>
  )
}

export default TimescaleControl

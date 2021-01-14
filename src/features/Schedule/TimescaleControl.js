import React from 'react'
import { useLocation } from 'react-router'
import { useLink } from 'valuelink'
import { makeStyles } from 'styles'
import { TIMESCALES_OPTIONS } from 'utils/constants'
import { add } from 'utils/qs'
import { DatePicker, Select } from 'components'

const useStyles = makeStyles({
  control: {
    display: 'flex',
    flexDirection: 'row',
  },
})

function TimescaleControl() {
  const classes = useStyles()
  const location = useLocation()
  const $date = useLink()

  const handleChange = event => {
    add({ ts: event.target.value })
  }

  const ts = location.query.ts || 'week'

  return (
    <div className={classes.control}>
      <Select value={ts} options={TIMESCALES_OPTIONS} onChange={handleChange} />
      <DatePicker $value={$date} margin="none" />
    </div>
  )
}

export default TimescaleControl

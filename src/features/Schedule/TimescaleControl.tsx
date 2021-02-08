import React, { ChangeEvent } from 'react'
import { useLocation } from 'react-router'
import { useLink } from 'valuelink'
import { makeStyles } from 'styles'
import { TIMESCALES_OPTIONS } from 'utils/constants'
import { add } from 'utils/qs'
import { DatePicker, Select } from 'components'
import { ParsedQs } from 'qs'
import { Location } from 'history'
import { ParsableDate } from '@material-ui/pickers/constants/prop-types'

const useStyles = makeStyles({
  control: {
    display: 'flex',
    flexDirection: 'row',
  },
})

type LocationWithQuery = Location & { query: ParsedQs }

function TimescaleControl(): JSX.Element {
  const classes = useStyles()
  const location = useLocation() as LocationWithQuery
  const $date = useLink<ParsableDate | null>(null)

  const handleChange = (event: ChangeEvent<{ name?: string | undefined; value: unknown }>) => {
    if (typeof event.target.value === 'string') {
      add({ ts: event.target.value })
    }
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

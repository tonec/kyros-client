import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import BaseSwitch from '@material-ui/core/Switch'

function Switch() {
  return <FormControlLabel control={<BaseSwitch />} label="Uncontrolled" />
}

export default Switch

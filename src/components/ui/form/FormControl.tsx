import React, { ReactElement, ReactNode } from 'react'
import { makeStyles, color } from '../../../styles'
import FormInputError from './FormInputError'

interface UseStylesProps {
  fullWidth: boolean
  disabled: boolean
  isError: boolean
}

const width = ({ fullWidth }: UseStylesProps) => (fullWidth ? '100%' : 'auto')

const useStyles = makeStyles(theme => ({
  control: {
    position: 'relative',
    margin: theme.spacing(0.5, 0, 0),
    padding: theme.spacing(0, 0, 2.5),

    width,

    '& > div': {
      width,
    },

    '& input': {
      width,
      borderColor: ({ disabled, isError }: UseStylesProps) => {
        if (disabled) {
          return color('disabled')
        }

        return isError ? color('error') : 'initial'
      },
    },
  },
}))

interface Props {
  children: ReactNode
  disabled: boolean
  isError: boolean
  error: string
  fullWidth: boolean
}

function FormControl({
  children,
  fullWidth,
  disabled,
  isError,
  error,
}: Props): ReactElement {
  const classes = useStyles({ fullWidth, disabled, isError })

  return (
    <div className={classes.control}>
      {children}
      {isError && <FormInputError error={error} />}
    </div>
  )
}

export default FormControl

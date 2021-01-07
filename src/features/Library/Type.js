import React from 'react'
import { makeStyles } from 'styles'
import { Card, Centered, Typography } from 'components'

const useStyles = makeStyles({
  card: {
    width: 350,
  },
})

function TypeLibrary() {
  const classes = useStyles()

  return (
    <Centered title="Form library">
      <Card className={classes.card}>
        <Typography variant="h1" gutterBottom>
          H1 heading
        </Typography>
        <Typography variant="h2" gutterBottom>
          H2 heading
        </Typography>
        <Typography variant="h3" gutterBottom>
          H3 heading
        </Typography>
        <Typography variant="h4" gutterBottom>
          H4 heading
        </Typography>
        <Typography variant="h5" gutterBottom>
          H5 heading
        </Typography>
        <Typography variant="h6" gutterBottom>
          H6 heading
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Subtitle 1
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          Subtitle 2
        </Typography>
        <Typography variant="body1" gutterBottom>
          Body 1
        </Typography>
        <Typography variant="body2" gutterBottom>
          Body 2
        </Typography>
        <Typography variant="caption" gutterBottom>
          Caption
        </Typography>
        <Typography variant="overline" gutterBottom>
          Overline
        </Typography>
      </Card>
    </Centered>
  )
}

export default TypeLibrary

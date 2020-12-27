import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Box, Card, Container, Grid, Typography } from './ui'

function NotFound({ staticContext }) {
  if (staticContext) {
    staticContext.statusCode = 404
  }

  return (
    <Container maxWidth="sm">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box spacing={{ m: 4 }}>
            <Card>
              <Typography variant="h1">Page not found</Typography>
              <Link to="/">Go to the home page</Link>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

NotFound.propTypes = {
  staticContext: PropTypes.object,
}

NotFound.defaultProps = {
  staticContext: null,
}

export default NotFound

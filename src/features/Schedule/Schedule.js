import React from 'react'
import { provideHooks } from 'redial'
import { Main, PageHeader } from 'components'

function Schedule() {
  const title = 'Schedule'

  return (
    <Main title={title}>
      <PageHeader title={title} />
    </Main>
  )
}

const hooks = {}

export default provideHooks(hooks)(Schedule)

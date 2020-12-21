import React from 'react'
import { childrenType } from 'types'
import * as grommet from 'grommet'

console.log('grommet', grommet)

function Card({ children }) {
  return (
    <div background="light-1" pad="medium">
      {children}
      {/* <BaseCard>sdsdsd</BaseCard> */}
    </div>
  )
}

Card.propTypes = {
  children: childrenType,
}

export default Card

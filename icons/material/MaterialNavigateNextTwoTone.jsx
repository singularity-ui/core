import React from 'react'

import Icon from '../Icon'

const MaterialNavigateNextTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M10.02 18l6-6-6-6-1.41 1.41L13.19 12l-4.58 4.59z" />
  </svg>
)

const MaterialNavigateNextTwoTone = props => <Icon as={MaterialNavigateNextTwoToneSvg} {...props} />

MaterialNavigateNextTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialNavigateNextTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialNavigateNextTwoTone

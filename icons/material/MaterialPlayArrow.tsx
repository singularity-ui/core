import React from 'react'

import Icon from '../Icon'

const MaterialPlayArrowSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M8 5v14l11-7z" />
  </svg>
)

const MaterialPlayArrow = props => <Icon as={MaterialPlayArrowSvg} {...props} />

MaterialPlayArrow.defaultProps = { ...Icon.defaultProps }

MaterialPlayArrow.propTypes = { ...Icon.propTypes }

export default MaterialPlayArrow

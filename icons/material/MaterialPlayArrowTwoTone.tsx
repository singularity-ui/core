import React from 'react'

import Icon from '../Icon'

const MaterialPlayArrowTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M10 8.64v6.72L15.27 12z" opacity=".3" />
    <path d="M8 19l11-7L8 5v14zm2-10.36L15.27 12 10 15.36V8.64z" />
  </svg>
)

const MaterialPlayArrowTwoTone = props => <Icon as={MaterialPlayArrowTwoToneSvg} {...props} />

MaterialPlayArrowTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialPlayArrowTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialPlayArrowTwoTone

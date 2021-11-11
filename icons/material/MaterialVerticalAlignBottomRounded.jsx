import React from 'react'

import Icon from '../Icon'

const MaterialVerticalAlignBottomRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M14.79 13H13V4c0-.55-.45-1-1-1s-1 .45-1 1v9H9.21c-.45 0-.67.54-.35.85l2.79 2.79c.2.2.51.2.71 0l2.79-2.79c.31-.31.09-.85-.36-.85zM4 20c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1z" />
  </svg>
)

const MaterialVerticalAlignBottomRounded = props => <Icon as={MaterialVerticalAlignBottomRoundedSvg} {...props} />

MaterialVerticalAlignBottomRounded.defaultProps = { ...Icon.defaultProps }

MaterialVerticalAlignBottomRounded.propTypes = { ...Icon.propTypes }

export default MaterialVerticalAlignBottomRounded
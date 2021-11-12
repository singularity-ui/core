import React from 'react'

import Icon from '../Icon'

const MaterialDragHandleRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 9H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM5 15h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1z" />
  </svg>
)

const MaterialDragHandleRounded = props => <Icon as={MaterialDragHandleRoundedSvg} {...props} />

MaterialDragHandleRounded.defaultProps = { ...Icon.defaultProps }

MaterialDragHandleRounded.propTypes = { ...Icon.propTypes }

export default MaterialDragHandleRounded

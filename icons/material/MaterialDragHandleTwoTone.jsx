import React from 'react'

import Icon from '../Icon'

const MaterialDragHandleTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M4 9h16v2H4zm0 4h16v2H4z" />
  </svg>
)

const MaterialDragHandleTwoTone = props => <Icon as={MaterialDragHandleTwoToneSvg} {...props} />

MaterialDragHandleTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialDragHandleTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialDragHandleTwoTone

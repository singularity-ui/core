import React from 'react'

import Icon from '../Icon'

const MaterialFlashOnSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M7 2v11h3v9l7-12h-4l4-8z" />
  </svg>
)

const MaterialFlashOn = props => <Icon as={MaterialFlashOnSvg} {...props} />

MaterialFlashOn.defaultProps = { ...Icon.defaultProps }

MaterialFlashOn.propTypes = { ...Icon.propTypes }

export default MaterialFlashOn

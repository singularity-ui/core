import React from 'react'

import Icon from '../Icon'

const MaterialNorthSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M5,9l1.41,1.41L11,5.83V22H13V5.83l4.59,4.59L19,9l-7-7L5,9z" />
  </svg>
)

const MaterialNorth = props => <Icon as={MaterialNorthSvg} {...props} />

MaterialNorth.defaultProps = { ...Icon.defaultProps }

MaterialNorth.propTypes = { ...Icon.propTypes }

export default MaterialNorth

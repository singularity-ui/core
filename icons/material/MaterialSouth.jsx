import React from 'react'

import Icon from '../Icon'

const MaterialSouthSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M19,15l-1.41-1.41L13,18.17V2H11v16.17l-4.59-4.59L5,15l7,7L19,15z" />
  </svg>
)

const MaterialSouth = props => <Icon as={MaterialSouthSvg} {...props} />

MaterialSouth.defaultProps = { ...Icon.defaultProps }

MaterialSouth.propTypes = { ...Icon.propTypes }

export default MaterialSouth

import React from 'react'

import Icon from '../Icon'

const MaterialNorthWestSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M5,15h2V8.41L18.59,20L20,18.59L8.41,7H15V5H5V15z" />
  </svg>
)

const MaterialNorthWestSharp = props => <Icon as={MaterialNorthWestSharpSvg} {...props} />

MaterialNorthWestSharp.defaultProps = { ...Icon.defaultProps }

MaterialNorthWestSharp.propTypes = { ...Icon.propTypes }

export default MaterialNorthWestSharp
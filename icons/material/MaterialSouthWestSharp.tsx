import React from 'react'

import Icon from '../Icon'

const MaterialSouthWestSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M15,19v-2H8.41L20,5.41L18.59,4L7,15.59V9H5v10H15z" />
  </svg>
)

const MaterialSouthWestSharp = props => <Icon as={MaterialSouthWestSharpSvg} {...props} />

MaterialSouthWestSharp.defaultProps = { ...Icon.defaultProps }

MaterialSouthWestSharp.propTypes = { ...Icon.propTypes }

export default MaterialSouthWestSharp
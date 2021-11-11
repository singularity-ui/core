import React from 'react'

import Icon from '../Icon'

const MaterialEmailSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M22 4H2v16h20V4zm-2 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
)

const MaterialEmailSharp = props => <Icon as={MaterialEmailSharpSvg} {...props} />

MaterialEmailSharp.defaultProps = { ...Icon.defaultProps }

MaterialEmailSharp.propTypes = { ...Icon.propTypes }

export default MaterialEmailSharp
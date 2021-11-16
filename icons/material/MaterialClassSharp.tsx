import React from 'react'

import Icon from '../Icon'

const MaterialClassSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 2H4v20h16V2zM6 4h5v8l-2.5-1.5L6 12V4z" />
  </svg>
)

const MaterialClassSharp = props => <Icon as={MaterialClassSharpSvg} {...props} />

MaterialClassSharp.defaultProps = { ...Icon.defaultProps }

MaterialClassSharp.propTypes = { ...Icon.propTypes }

export default MaterialClassSharp
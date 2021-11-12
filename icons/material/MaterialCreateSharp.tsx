import React from 'react'

import Icon from '../Icon'

const MaterialCreateSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM21.41 6.34l-3.75-3.75-2.53 2.54 3.75 3.75 2.53-2.54z" />
  </svg>
)

const MaterialCreateSharp = props => <Icon as={MaterialCreateSharpSvg} {...props} />

MaterialCreateSharp.defaultProps = { ...Icon.defaultProps }

MaterialCreateSharp.propTypes = { ...Icon.propTypes }

export default MaterialCreateSharp

import React from 'react'

import Icon from '../Icon'

const MaterialPlaceSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-10c-4.2 0-8 3.22-8 8.2 0 3.32 2.67 7.25 8 11.8 5.33-4.55 8-8.48 8-11.8C20 5.22 16.2 2 12 2z" />
  </svg>
)

const MaterialPlaceSharp = props => <Icon as={MaterialPlaceSharpSvg} {...props} />

MaterialPlaceSharp.defaultProps = { ...Icon.defaultProps }

MaterialPlaceSharp.propTypes = { ...Icon.propTypes }

export default MaterialPlaceSharp
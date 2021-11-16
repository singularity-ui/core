import React from 'react'

import Icon from '../Icon'

const MaterialImageSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 21V3H3v18h18zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
  </svg>
)

const MaterialImageSharp = props => <Icon as={MaterialImageSharpSvg} {...props} />

MaterialImageSharp.defaultProps = { ...Icon.defaultProps }

MaterialImageSharp.propTypes = { ...Icon.propTypes }

export default MaterialImageSharp
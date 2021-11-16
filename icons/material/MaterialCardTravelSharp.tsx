import React from 'react'

import Icon from '../Icon'

const MaterialCardTravelSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M22 6h-5V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H2v15h20V6zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z" />
  </svg>
)

const MaterialCardTravelSharp = props => <Icon as={MaterialCardTravelSharpSvg} {...props} />

MaterialCardTravelSharp.defaultProps = { ...Icon.defaultProps }

MaterialCardTravelSharp.propTypes = { ...Icon.propTypes }

export default MaterialCardTravelSharp
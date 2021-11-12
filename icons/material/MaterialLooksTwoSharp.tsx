import React from 'react'

import Icon from '../Icon'

const MaterialLooksTwoSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 3H3v18h18V3zm-6 10h-4v2h4v2H9v-6h4V9H9V7h6v6z" />
  </svg>
)

const MaterialLooksTwoSharp = props => <Icon as={MaterialLooksTwoSharpSvg} {...props} />

MaterialLooksTwoSharp.defaultProps = { ...Icon.defaultProps }

MaterialLooksTwoSharp.propTypes = { ...Icon.propTypes }

export default MaterialLooksTwoSharp

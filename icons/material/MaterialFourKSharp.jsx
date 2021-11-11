import React from 'react'

import Icon from '../Icon'

const MaterialFourKSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 3H3v18h18V3zm-9 10.51h-1V15H9.5v-1.5h-3V9H8v3h1.5V9H11v3h1v1.51zM18.2 15h-1.7l-2-3v3H13V9h1.5v3l2-3h1.7l-2 3 2 3z" />
  </svg>
)

const MaterialFourKSharp = props => <Icon as={MaterialFourKSharpSvg} {...props} />

MaterialFourKSharp.defaultProps = { ...Icon.defaultProps }

MaterialFourKSharp.propTypes = { ...Icon.propTypes }

export default MaterialFourKSharp
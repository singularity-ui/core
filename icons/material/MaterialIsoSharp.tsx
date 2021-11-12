import React from 'react'

import Icon from '../Icon'

const MaterialIsoSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 3H3v18h18V3zM5.5 7.5h2v-2H9v2h2V9H9v2H7.5V9h-2V7.5zM19 19H5L19 5v14zm-2-2v-1.5h-5V17h5z" />
  </svg>
)

const MaterialIsoSharp = props => <Icon as={MaterialIsoSharpSvg} {...props} />

MaterialIsoSharp.defaultProps = { ...Icon.defaultProps }

MaterialIsoSharp.propTypes = { ...Icon.propTypes }

export default MaterialIsoSharp

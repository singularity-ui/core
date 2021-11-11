import React from 'react'

import Icon from '../Icon'

const MaterialAttributionSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-2.75-5.5h1.5V19h2.5v-4.5h1.5v-6h-5.5z" />
    <circle cx="12" cy="6.5" r="1.5" />
  </svg>
)

const MaterialAttributionSharp = props => <Icon as={MaterialAttributionSharpSvg} {...props} />

MaterialAttributionSharp.defaultProps = { ...Icon.defaultProps }

MaterialAttributionSharp.propTypes = { ...Icon.propTypes }

export default MaterialAttributionSharp
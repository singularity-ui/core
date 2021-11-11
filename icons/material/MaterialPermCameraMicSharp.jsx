import React from 'react'

import Icon from '../Icon'

const MaterialPermCameraMicSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M22 5h-5.17L15 3H9L7.17 5H2v16h9v-2.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V21h9V5zm-8 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v4z" />
  </svg>
)

const MaterialPermCameraMicSharp = props => <Icon as={MaterialPermCameraMicSharpSvg} {...props} />

MaterialPermCameraMicSharp.defaultProps = { ...Icon.defaultProps }

MaterialPermCameraMicSharp.propTypes = { ...Icon.propTypes }

export default MaterialPermCameraMicSharp
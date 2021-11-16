import React from 'react'

import Icon from '../Icon'

const MaterialOndemandVideoSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M23 3H1v16h7v2h8v-2h6.99L23 3zm-2 14H3V5h18v12zm-5-6l-7 4V7l7 4z" />
  </svg>
)

const MaterialOndemandVideoSharp = props => <Icon as={MaterialOndemandVideoSharpSvg} {...props} />

MaterialOndemandVideoSharp.defaultProps = { ...Icon.defaultProps }

MaterialOndemandVideoSharp.propTypes = { ...Icon.propTypes }

export default MaterialOndemandVideoSharp
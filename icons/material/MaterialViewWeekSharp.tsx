import React from 'react'

import Icon from '../Icon'

const MaterialViewWeekSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M7.33,20H2V4h5.33V20z M22,20V4h-5.33v16H22z M14.67,20V4H9.33v16H14.67z" />
  </svg>
)

const MaterialViewWeekSharp = props => <Icon as={MaterialViewWeekSharpSvg} {...props} />

MaterialViewWeekSharp.defaultProps = { ...Icon.defaultProps }

MaterialViewWeekSharp.propTypes = { ...Icon.propTypes }

export default MaterialViewWeekSharp

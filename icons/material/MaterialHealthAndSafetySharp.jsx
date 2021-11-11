import React from 'react'

import Icon from '../Icon'

const MaterialHealthAndSafetySharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M10.5,13H8v-3h2.5V7.5h3V10H16v3h-2.5v2.5h-3V13z M12,2L4,5v6.09c0,5.05,3.41,9.76,8,10.91c4.59-1.15,8-5.86,8-10.91V5L12,2 z" />
  </svg>
)

const MaterialHealthAndSafetySharp = props => <Icon as={MaterialHealthAndSafetySharpSvg} {...props} />

MaterialHealthAndSafetySharp.defaultProps = { ...Icon.defaultProps }

MaterialHealthAndSafetySharp.propTypes = { ...Icon.propTypes }

export default MaterialHealthAndSafetySharp
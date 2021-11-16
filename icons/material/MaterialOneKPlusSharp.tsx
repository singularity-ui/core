import React from 'react'

import Icon from '../Icon'

const MaterialOneKPlusSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <path d="M21,3H3v18h18V3z M9,15H7.5v-4.5H6V9h3V15z M13.75,15L12,12.75V15h-1.5V9H12v2.25L13.75,9h1.75l-2.25,3l2.25,3H13.75z M19,12.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19V12.5z" />
    </g>
  </svg>
)

const MaterialOneKPlusSharp = props => <Icon as={MaterialOneKPlusSharpSvg} {...props} />

MaterialOneKPlusSharp.defaultProps = { ...Icon.defaultProps }

MaterialOneKPlusSharp.propTypes = { ...Icon.propTypes }

export default MaterialOneKPlusSharp
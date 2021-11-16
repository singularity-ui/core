import React from 'react'

import Icon from '../Icon'

const MaterialGppMaybeSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <path d="M0,0h24v24H0V0z" fill="none" />
    </g>
    <g>
      <path d="M12,2L4,5v6.09c0,5.05,3.41,9.76,8,10.91c4.59-1.15,8-5.86,8-10.91V5L12,2z M13,16h-2v-2h2V16z M13,12h-2V7h2V12z" />
    </g>
  </svg>
)

const MaterialGppMaybeSharp = props => <Icon as={MaterialGppMaybeSharpSvg} {...props} />

MaterialGppMaybeSharp.defaultProps = { ...Icon.defaultProps }

MaterialGppMaybeSharp.propTypes = { ...Icon.propTypes }

export default MaterialGppMaybeSharp
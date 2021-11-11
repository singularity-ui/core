import React from 'react'

import Icon from '../Icon'

const MaterialDoNotDisturbOnSharpSvg = props => (
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
      <g>
        <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M17,13H7v-2h10V13z" />
      </g>
    </g>
  </svg>
)

const MaterialDoNotDisturbOnSharp = props => <Icon as={MaterialDoNotDisturbOnSharpSvg} {...props} />

MaterialDoNotDisturbOnSharp.defaultProps = { ...Icon.defaultProps }

MaterialDoNotDisturbOnSharp.propTypes = { ...Icon.propTypes }

export default MaterialDoNotDisturbOnSharp
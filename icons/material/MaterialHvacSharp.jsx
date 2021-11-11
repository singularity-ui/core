import React from 'react'

import Icon from '../Icon'

const MaterialHvacSharpSvg = props => (
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
        <g>
          <path d="M8.56,14h6.89c0.26-0.45,0.44-0.96,0.51-1.5h-7.9C8.12,13.04,8.29,13.55,8.56,14z" />
        </g>
        <g>
          <path d="M12,16c1.01,0,1.91-0.39,2.62-1H9.38C10.09,15.61,10.99,16,12,16z" />
        </g>
        <g>
          <path d="M12,8c-1.01,0-1.91,0.39-2.62,1h5.24C13.91,8.39,13.01,8,12,8z" />
        </g>
        <g>
          <path d="M8.56,10c-0.26,0.45-0.44,0.96-0.51,1.5h7.9c-0.07-0.54-0.24-1.05-0.51-1.5H8.56z" />
        </g>
        <g>
          <path d="M3,3v18h18V3H3z M12,18c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S15.31,18,12,18z" />
        </g>
      </g>
    </g>
  </svg>
)

const MaterialHvacSharp = props => <Icon as={MaterialHvacSharpSvg} {...props} />

MaterialHvacSharp.defaultProps = { ...Icon.defaultProps }

MaterialHvacSharp.propTypes = { ...Icon.propTypes }

export default MaterialHvacSharp
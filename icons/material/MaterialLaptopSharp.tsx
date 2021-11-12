import React from 'react'

import Icon from '../Icon'

const MaterialLaptopSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <rect fill="none" height="24" width="24" x="0" />
    </g>
    <g>
      <g>
        <path d="M20,18l2-2V4H2v12l2,2H0v2h24v-2H20z M4,6h16v10H4V6z" />
      </g>
    </g>
  </svg>
)

const MaterialLaptopSharp = props => <Icon as={MaterialLaptopSharpSvg} {...props} />

MaterialLaptopSharp.defaultProps = { ...Icon.defaultProps }

MaterialLaptopSharp.propTypes = { ...Icon.propTypes }

export default MaterialLaptopSharp

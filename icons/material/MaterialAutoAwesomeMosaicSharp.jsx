import React from 'react'

import Icon from '../Icon'

const MaterialAutoAwesomeMosaicSharpSvg = props => (
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
        <path d="M3,21h8V3L3,3V21z M21,3h-8v8h8V3z M13,21h8v-8h-8V21z" />
      </g>
    </g>
  </svg>
)

const MaterialAutoAwesomeMosaicSharp = props => <Icon as={MaterialAutoAwesomeMosaicSharpSvg} {...props} />

MaterialAutoAwesomeMosaicSharp.defaultProps = { ...Icon.defaultProps }

MaterialAutoAwesomeMosaicSharp.propTypes = { ...Icon.propTypes }

export default MaterialAutoAwesomeMosaicSharp
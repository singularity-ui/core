import React from 'react'

import Icon from '../Icon'

const MaterialElectricalServicesSharpSvg = props => (
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
        <rect height="2" width="3" x="18" y="13" />
        <polygon points="12,12 12,14 10,14 10,18 12,18 12,20 17,20 17,12" />
        <polygon points="5,11 12,11 12,4 4,4 4,6 10,6 10,9 3,9 3,17 9,17 9,15 5,15" />
        <rect height="2" width="3" x="18" y="17" />
      </g>
    </g>
  </svg>
)

const MaterialElectricalServicesSharp = props => <Icon as={MaterialElectricalServicesSharpSvg} {...props} />

MaterialElectricalServicesSharp.defaultProps = { ...Icon.defaultProps }

MaterialElectricalServicesSharp.propTypes = { ...Icon.propTypes }

export default MaterialElectricalServicesSharp
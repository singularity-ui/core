import React from 'react'

import Icon from '../Icon'

const MaterialLivingSharpSvg = props => (
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
      <g>
        <polygon points="15.5,12 15.5,14.5 8.5,14.5 8.5,12 7.52,12 6.5,12 6.5,16.5 17.5,16.5 17.5,12" />
        <polygon points="10,10 10,13 14,13 14,10 16.25,9.99 16.25,7.5 7.75,7.5 7.75,9.99" />
        <path d="M22,2H2v20h20V2z M19,9.99V18H5v-8l1.25-0.01V6h11.5v3.99H19z" />
      </g>
    </g>
  </svg>
)

const MaterialLivingSharp = props => <Icon as={MaterialLivingSharpSvg} {...props} />

MaterialLivingSharp.defaultProps = { ...Icon.defaultProps }

MaterialLivingSharp.propTypes = { ...Icon.propTypes }

export default MaterialLivingSharp

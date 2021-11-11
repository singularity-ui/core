import React from 'react'

import Icon from '../Icon'

const MaterialLteMobiledataSharpSvg = props => (
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
        <path d="M6,14h3v2H4V8h2V14z M9,10h2v6h2v-6h2V8H9V10z M21,10V8h-5v8h5v-2h-3v-1h3v-2h-3v-1H21z" />
      </g>
    </g>
  </svg>
)

const MaterialLteMobiledataSharp = props => <Icon as={MaterialLteMobiledataSharpSvg} {...props} />

MaterialLteMobiledataSharp.defaultProps = { ...Icon.defaultProps }

MaterialLteMobiledataSharp.propTypes = { ...Icon.propTypes }

export default MaterialLteMobiledataSharp

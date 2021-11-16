import React from 'react'

import Icon from '../Icon'

const MaterialGMobiledataSharpSvg = props => (
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
        <path d="M12,11v2h2v2H9V9h7V7H7v10h9v-6H12z" />
      </g>
    </g>
  </svg>
)

const MaterialGMobiledataSharp = props => <Icon as={MaterialGMobiledataSharpSvg} {...props} />

MaterialGMobiledataSharp.defaultProps = { ...Icon.defaultProps }

MaterialGMobiledataSharp.propTypes = { ...Icon.propTypes }

export default MaterialGMobiledataSharp
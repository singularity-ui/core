import React from 'react'

import Icon from '../Icon'

const MaterialHMobiledataRoundedSvg = props => (
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
        <path d="M15,11H9V8c0-0.55-0.45-1-1-1h0C7.45,7,7,7.45,7,8v8c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-3h6v3c0,0.55,0.45,1,1,1h0 c0.55,0,1-0.45,1-1V8c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1V11z" />
      </g>
    </g>
  </svg>
)

const MaterialHMobiledataRounded = props => <Icon as={MaterialHMobiledataRoundedSvg} {...props} />

MaterialHMobiledataRounded.defaultProps = { ...Icon.defaultProps }

MaterialHMobiledataRounded.propTypes = { ...Icon.propTypes }

export default MaterialHMobiledataRounded
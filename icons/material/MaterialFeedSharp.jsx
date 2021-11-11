import React from 'react'

import Icon from '../Icon'

const MaterialFeedSharpSvg = props => (
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
      <path d="M16,3H3v18h18V8L16,3z M7,7h5v2H7V7z M17,17H7v-2h10V17z M17,13H7v-2h10V13z M15,9V5l4,4H15z" />
    </g>
  </svg>
)

const MaterialFeedSharp = props => <Icon as={MaterialFeedSharpSvg} {...props} />

MaterialFeedSharp.defaultProps = { ...Icon.defaultProps }

MaterialFeedSharp.propTypes = { ...Icon.propTypes }

export default MaterialFeedSharp

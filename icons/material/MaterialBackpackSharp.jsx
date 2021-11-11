import React from 'react'

import Icon from '../Icon'

const MaterialBackpackSharpSvg = props => (
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
      <g>
        <g>
          <path d="M20,8v14H4V8c0-1.86,1.28-3.41,3-3.86V2h3v2h4V2h3v2.14C18.72,4.59,20,6.14,20,8z M6,12v2h10v2h2v-4H6z" />
        </g>
      </g>
    </g>
  </svg>
)

const MaterialBackpackSharp = props => <Icon as={MaterialBackpackSharpSvg} {...props} />

MaterialBackpackSharp.defaultProps = { ...Icon.defaultProps }

MaterialBackpackSharp.propTypes = { ...Icon.propTypes }

export default MaterialBackpackSharp

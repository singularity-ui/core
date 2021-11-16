import React from 'react'

import Icon from '../Icon'

const MaterialSportsMmaSharpSvg = props => (
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
        <rect height="4" width="10" x="7" y="17" />
        <path d="M18,7c-0.55,0-1,0.45-1,1V5c0-1.1-0.9-2-2-2H7C5.9,3,5,3.9,5,5v5.8c0,0.13,0.01,0.26,0.04,0.39l0.8,4 c0.09,0.47,0.5,0.8,0.98,0.8h10.36c0.45,0,0.89-0.36,0.98-0.8l0.8-4C18.99,11.06,19,10.93,19,10.8V8C19,7.45,18.55,7,18,7z M15,10 H7V7h8V10z" />
      </g>
    </g>
  </svg>
)

const MaterialSportsMmaSharp = props => <Icon as={MaterialSportsMmaSharpSvg} {...props} />

MaterialSportsMmaSharp.defaultProps = { ...Icon.defaultProps }

MaterialSportsMmaSharp.propTypes = { ...Icon.propTypes }

export default MaterialSportsMmaSharp
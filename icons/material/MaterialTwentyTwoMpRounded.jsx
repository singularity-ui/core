import React from 'react'

import Icon from '../Icon'

const MaterialTwentyTwoMpRoundedSvg = props => (
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
        <rect height="1.5" width="1.5" x="15" y="14" />
        <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M6.5,9c0-0.55,0.45-1,1-1h2V7H7.25 C6.84,7,6.5,6.66,6.5,6.25S6.84,5.5,7.25,5.5H10c0.55,0,1,0.45,1,1V8c0,0.55-0.45,1-1,1H8v1h2.25c0.41,0,0.75,0.34,0.75,0.75 s-0.34,0.75-0.75,0.75H7.5c-0.55,0-1-0.45-1-1V9z M12.5,17.75c0,0.41-0.34,0.75-0.75,0.75S11,18.16,11,17.75V14h-1v2.25 C10,16.66,9.66,17,9.25,17S8.5,16.66,8.5,16.25V14h-1v3.75c0,0.41-0.34,0.75-0.75,0.75S6,18.16,6,17.75V13.5c0-0.55,0.45-1,1-1 h4.5c0.55,0,1,0.45,1,1V17.75z M13,10.5V9c0-0.55,0.45-1,1-1h2V7h-2.25C13.34,7,13,6.66,13,6.25s0.34-0.75,0.75-0.75h2.75 c0.55,0,1,0.45,1,1V8c0,0.55-0.45,1-1,1h-2v1h2.25c0.41,0,0.75,0.34,0.75,0.75s-0.34,0.75-0.75,0.75H14 C13.45,11.5,13,11.05,13,10.5z M18,16c0,0.55-0.45,1-1,1h-2v0.75c0,0.41-0.34,0.75-0.75,0.75s-0.75-0.34-0.75-0.75V13.5 c0-0.55,0.45-1,1-1H17c0.55,0,1,0.45,1,1V16z" />
      </g>
    </g>
  </svg>
)

const MaterialTwentyTwoMpRounded = props => <Icon as={MaterialTwentyTwoMpRoundedSvg} {...props} />

MaterialTwentyTwoMpRounded.defaultProps = { ...Icon.defaultProps }

MaterialTwentyTwoMpRounded.propTypes = { ...Icon.propTypes }

export default MaterialTwentyTwoMpRounded
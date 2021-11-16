import React from 'react'

import Icon from '../Icon'

const MaterialCreditScoreSharpSvg = props => (
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
      <path d="M2,4v16h7v-2H4v-6h18V4H2z M20,8H4V6h16V8z M14.93,19.17l-2.83-2.83l-1.41,1.41L14.93,22L22,14.93l-1.41-1.41L14.93,19.17z" />
    </g>
  </svg>
)

const MaterialCreditScoreSharp = props => <Icon as={MaterialCreditScoreSharpSvg} {...props} />

MaterialCreditScoreSharp.defaultProps = { ...Icon.defaultProps }

MaterialCreditScoreSharp.propTypes = { ...Icon.propTypes }

export default MaterialCreditScoreSharp
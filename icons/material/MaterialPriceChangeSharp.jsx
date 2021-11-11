import React from 'react'

import Icon from '../Icon'

const MaterialPriceChangeSharpSvg = props => (
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
      <path d="M2,4v16h20V4H2z M12,10H8v1h4v5h-2v1H8v-1H6v-2h4v-1H6V8h2V7h2v1h2V10z M16,16.25l-2-2h4L16,16.25z M14,10l2-2l2,2H14z" />
    </g>
  </svg>
)

const MaterialPriceChangeSharp = props => <Icon as={MaterialPriceChangeSharpSvg} {...props} />

MaterialPriceChangeSharp.defaultProps = { ...Icon.defaultProps }

MaterialPriceChangeSharp.propTypes = { ...Icon.propTypes }

export default MaterialPriceChangeSharp
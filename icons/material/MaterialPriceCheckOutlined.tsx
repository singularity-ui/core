import React from 'react'

import Icon from '../Icon'

const MaterialPriceCheckOutlinedSvg = props => (
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
        <path d="M11,13V9c0-0.55-0.45-1-1-1H6V6h5V4H8.5V3h-2v1H5C4.45,4,4,4.45,4,5v4c0,0.55,0.45,1,1,1h4v2H4v2h2.5v1h2v-1H10 C10.55,14,11,13.55,11,13z" />
        <polygon points="19.59,12.52 13.93,18.17 11.1,15.34 9.69,16.76 13.93,21 21,13.93" />
      </g>
    </g>
  </svg>
)

const MaterialPriceCheckOutlined = props => <Icon as={MaterialPriceCheckOutlinedSvg} {...props} />

MaterialPriceCheckOutlined.defaultProps = { ...Icon.defaultProps }

MaterialPriceCheckOutlined.propTypes = { ...Icon.propTypes }

export default MaterialPriceCheckOutlined
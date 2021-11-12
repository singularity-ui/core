import React from 'react'

import Icon from '../Icon'

const MaterialSignalWifi_0BarOutlinedSvg = props => (
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
      <path d="M12,4C7.31,4,3.07,5.9,0,8.98L12,21L24,8.98C20.93,5.9,16.69,4,12,4z M2.92,9.07C5.51,7.08,8.67,6,12,6 s6.49,1.08,9.08,3.07L12,18.17L2.92,9.07z" />
    </g>
  </svg>
)

const MaterialSignalWifi_0BarOutlined = props => <Icon as={MaterialSignalWifi_0BarOutlinedSvg} {...props} />

MaterialSignalWifi_0BarOutlined.defaultProps = { ...Icon.defaultProps }

MaterialSignalWifi_0BarOutlined.propTypes = { ...Icon.propTypes }

export default MaterialSignalWifi_0BarOutlined

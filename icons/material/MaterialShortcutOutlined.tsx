import React from 'react'

import Icon from '../Icon'

const MaterialShortcutOutlinedSvg = props => (
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
      <path d="M15,5l-1.41,1.41L15,7.83L17.17,10H8c-2.76,0-5,2.24-5,5v4h2v-4c0-1.65,1.35-3,3-3h9.17L15,14.17l-1.41,1.41L15,17l6-6 L15,5z" />
    </g>
  </svg>
)

const MaterialShortcutOutlined = props => <Icon as={MaterialShortcutOutlinedSvg} {...props} />

MaterialShortcutOutlined.defaultProps = { ...Icon.defaultProps }

MaterialShortcutOutlined.propTypes = { ...Icon.propTypes }

export default MaterialShortcutOutlined
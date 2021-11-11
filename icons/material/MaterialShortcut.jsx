import React from 'react'

import Icon from '../Icon'

const MaterialShortcutSvg = props => (
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
      <path d="M21,11l-6-6v5H8c-2.76,0-5,2.24-5,5v4h2v-4c0-1.65,1.35-3,3-3h7v5L21,11z" />
    </g>
  </svg>
)

const MaterialShortcut = props => <Icon as={MaterialShortcutSvg} {...props} />

MaterialShortcut.defaultProps = { ...Icon.defaultProps }

MaterialShortcut.propTypes = { ...Icon.propTypes }

export default MaterialShortcut

import React from 'react'

import Icon from '../Icon'

const MaterialAlignHorizontalLeftOutlinedSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M4,22H2V2h2V22z M22,7H6v3h16V7z M16,14H6v3h10V14z" />
  </svg>
)

const MaterialAlignHorizontalLeftOutlined = props => <Icon as={MaterialAlignHorizontalLeftOutlinedSvg} {...props} />

MaterialAlignHorizontalLeftOutlined.defaultProps = { ...Icon.defaultProps }

MaterialAlignHorizontalLeftOutlined.propTypes = { ...Icon.propTypes }

export default MaterialAlignHorizontalLeftOutlined

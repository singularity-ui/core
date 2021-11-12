import React from 'react'

import Icon from '../Icon'

const MaterialNorthEastSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M9,5v2h6.59L4,18.59L5.41,20L17,8.41V15h2V5H9z" />
  </svg>
)

const MaterialNorthEast = props => <Icon as={MaterialNorthEastSvg} {...props} />

MaterialNorthEast.defaultProps = { ...Icon.defaultProps }

MaterialNorthEast.propTypes = { ...Icon.propTypes }

export default MaterialNorthEast

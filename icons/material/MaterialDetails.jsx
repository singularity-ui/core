import React from 'react'

import Icon from '../Icon'

const MaterialDetailsSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M12,3L2,21h20L12,3z M13,8.92L18.6,19H13V8.92z M11,8.92V19H5.4L11,8.92z" />
  </svg>
)

const MaterialDetails = props => <Icon as={MaterialDetailsSvg} {...props} />

MaterialDetails.defaultProps = { ...Icon.defaultProps }

MaterialDetails.propTypes = { ...Icon.propTypes }

export default MaterialDetails

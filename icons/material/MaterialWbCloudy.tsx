import React from 'react'

import Icon from '../Icon'

const MaterialWbCloudySvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z" />
  </svg>
)

const MaterialWbCloudy = props => <Icon as={MaterialWbCloudySvg} {...props} />

MaterialWbCloudy.defaultProps = { ...Icon.defaultProps }

MaterialWbCloudy.propTypes = { ...Icon.propTypes }

export default MaterialWbCloudy

import React from 'react'

import Icon from '../Icon'

const MaterialShopTwoOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm9 13H7V7h14v9zm-9-1l5.5-4L12 8z" />
  </svg>
)

const MaterialShopTwoOutlined = props => <Icon as={MaterialShopTwoOutlinedSvg} {...props} />

MaterialShopTwoOutlined.defaultProps = { ...Icon.defaultProps }

MaterialShopTwoOutlined.propTypes = { ...Icon.propTypes }

export default MaterialShopTwoOutlined
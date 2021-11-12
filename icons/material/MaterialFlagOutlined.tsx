import React from 'react'

import Icon from '../Icon'

const MaterialFlagOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12.36 6l.4 2H18v6h-3.36l-.4-2H7V6h5.36M14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6L14 4z" />
  </svg>
)

const MaterialFlagOutlined = props => <Icon as={MaterialFlagOutlinedSvg} {...props} />

MaterialFlagOutlined.defaultProps = { ...Icon.defaultProps }

MaterialFlagOutlined.propTypes = { ...Icon.propTypes }

export default MaterialFlagOutlined

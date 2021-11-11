import React from 'react'

import Icon from '../Icon'

const MaterialHorizontalSplitOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 15v2H5v-2h14m2-10H3v2h18V5zm0 4H3v2h18V9zm0 4H3v6h18v-6z" />
  </svg>
)

const MaterialHorizontalSplitOutlined = props => <Icon as={MaterialHorizontalSplitOutlinedSvg} {...props} />

MaterialHorizontalSplitOutlined.defaultProps = { ...Icon.defaultProps }

MaterialHorizontalSplitOutlined.propTypes = { ...Icon.propTypes }

export default MaterialHorizontalSplitOutlined

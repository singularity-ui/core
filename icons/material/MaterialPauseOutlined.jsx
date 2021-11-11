import React from 'react'

import Icon from '../Icon'

const MaterialPauseOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
)

const MaterialPauseOutlined = props => <Icon as={MaterialPauseOutlinedSvg} {...props} />

MaterialPauseOutlined.defaultProps = { ...Icon.defaultProps }

MaterialPauseOutlined.propTypes = { ...Icon.propTypes }

export default MaterialPauseOutlined

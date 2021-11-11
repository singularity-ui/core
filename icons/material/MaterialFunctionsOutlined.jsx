import React from 'react'

import Icon from '../Icon'

const MaterialFunctionsOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7V4z" />
  </svg>
)

const MaterialFunctionsOutlined = props => <Icon as={MaterialFunctionsOutlinedSvg} {...props} />

MaterialFunctionsOutlined.defaultProps = { ...Icon.defaultProps }

MaterialFunctionsOutlined.propTypes = { ...Icon.propTypes }

export default MaterialFunctionsOutlined

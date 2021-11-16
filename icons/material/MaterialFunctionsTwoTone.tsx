import React from 'react'

import Icon from '../Icon'

const MaterialFunctionsTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M18 17h-7l5-5-5-5h7V4H6v2l6.5 6L6 18v2h12z" />
  </svg>
)

const MaterialFunctionsTwoTone = props => <Icon as={MaterialFunctionsTwoToneSvg} {...props} />

MaterialFunctionsTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialFunctionsTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialFunctionsTwoTone
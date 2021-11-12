import React from 'react'

import Icon from '../Icon'

const MaterialFormatIndentDecreaseTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M7 16V8l-4 4zm4-9h10v2H11zm0 4h10v2H11zm0 4h10v2H11zm-8 4h18v2H3zM3 3h18v2H3z" />
  </svg>
)

const MaterialFormatIndentDecreaseTwoTone = props => <Icon as={MaterialFormatIndentDecreaseTwoToneSvg} {...props} />

MaterialFormatIndentDecreaseTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialFormatIndentDecreaseTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialFormatIndentDecreaseTwoTone

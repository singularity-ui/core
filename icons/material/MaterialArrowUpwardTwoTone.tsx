import React from 'react'

import Icon from '../Icon'

const MaterialArrowUpwardTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
  </svg>
)

const MaterialArrowUpwardTwoTone = props => <Icon as={MaterialArrowUpwardTwoToneSvg} {...props} />

MaterialArrowUpwardTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialArrowUpwardTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialArrowUpwardTwoTone

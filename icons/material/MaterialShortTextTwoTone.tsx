import React from 'react'

import Icon from '../Icon'

const MaterialShortTextTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M4 9h16v2H4zm0 4h10v2H4z" />
  </svg>
)

const MaterialShortTextTwoTone = props => <Icon as={MaterialShortTextTwoToneSvg} {...props} />

MaterialShortTextTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialShortTextTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialShortTextTwoTone

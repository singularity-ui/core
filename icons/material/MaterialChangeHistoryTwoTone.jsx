import React from 'react'

import Icon from '../Icon'

const MaterialChangeHistoryTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 7.77L5.61 18h12.78z" opacity=".3" />
    <path d="M12 4L2 20h20L12 4zm0 3.77L18.39 18H5.61L12 7.77z" />
  </svg>
)

const MaterialChangeHistoryTwoTone = props => <Icon as={MaterialChangeHistoryTwoToneSvg} {...props} />

MaterialChangeHistoryTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialChangeHistoryTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialChangeHistoryTwoTone

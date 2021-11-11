import React from 'react'

import Icon from '../Icon'

const MaterialLineWeightTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z" />
  </svg>
)

const MaterialLineWeightTwoTone = props => <Icon as={MaterialLineWeightTwoToneSvg} {...props} />

MaterialLineWeightTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialLineWeightTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialLineWeightTwoTone
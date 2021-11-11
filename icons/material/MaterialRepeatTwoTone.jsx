import React from 'react'

import Icon from '../Icon'

const MaterialRepeatTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M7 22v-3h12v-6h-2v4H7v-3l-4 4zM21 6l-4-4v3H5v6h2V7h10v3z" />
  </svg>
)

const MaterialRepeatTwoTone = props => <Icon as={MaterialRepeatTwoToneSvg} {...props} />

MaterialRepeatTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialRepeatTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialRepeatTwoTone

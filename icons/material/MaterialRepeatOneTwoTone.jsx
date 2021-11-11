import React from 'react'

import Icon from '../Icon'

const MaterialRepeatOneTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M13 15V9h-1l-2 1v1h1.5v4zm6-2h-2v4H7v-3l-4 4 4 4v-3h12zM17 2v3H5v6h2V7h10v3l4-4z" />
  </svg>
)

const MaterialRepeatOneTwoTone = props => <Icon as={MaterialRepeatOneTwoToneSvg} {...props} />

MaterialRepeatOneTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialRepeatOneTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialRepeatOneTwoTone

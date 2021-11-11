import React from 'react'

import Icon from '../Icon'

const MaterialTitleTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M5 7h5.5v12h3V7H19V4H5z" />
  </svg>
)

const MaterialTitleTwoTone = props => <Icon as={MaterialTitleTwoToneSvg} {...props} />

MaterialTitleTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialTitleTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialTitleTwoTone
